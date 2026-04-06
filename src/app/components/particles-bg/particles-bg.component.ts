import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number; // alpha
};

@Component({
  selector: 'app-particles-bg',
  standalone: true,
  templateUrl: './particles-bg.component.html',
  styleUrls: ['./particles-bg.component.css'],
})
export class ParticlesBgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private rafId: number | null = null;

  private dpr = 1;
  private w = 0;
  private h = 0;

  private particles: Particle[] = [];
  private readonly baseCount = 140; // densidad base
  private readonly maxCount = 240;

  private mouseX = 0;
  private mouseY = 0;
  private mouseActive = false;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.resize();
    this.seedParticles(this.baseCount);

    this.loop();
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  // Mouse: parallax suave
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(ev: MouseEvent) {
    this.mouseX = ev.clientX;
    this.mouseY = ev.clientY;
    this.mouseActive = true;
  }

  @HostListener('window:mouseleave')
  onMouseLeave() {
    this.mouseActive = false;
  }

  // Click: SOLO si clickeás "vacío" (no botones/links)
  @HostListener('window:click', ['$event'])
  onClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement | null;
    if (!target) return;

    // Si el click cae en elementos interactivos, NO spawnear
    const interactive = target.closest(
      'a,button,input,textarea,select,label,summary,[role="button"],[data-no-particles="true"]'
    );
    if (interactive) return;

    this.spawnBurst(ev.clientX, ev.clientY, 26);
  }

  @HostListener('window:resize')
  resize() {
    const canvas = this.canvasRef.nativeElement;

    this.dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    this.w = window.innerWidth;
    this.h = window.innerHeight;

    canvas.width = Math.floor(this.w * this.dpr);
    canvas.height = Math.floor(this.h * this.dpr);
    canvas.style.width = `${this.w}px`;
    canvas.style.height = `${this.h}px`;

    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    // Re-equilibrar cantidad según tamaño
    const area = this.w * this.h;
    const desired = Math.min(this.maxCount, Math.max(90, Math.floor(area / 14000)));
    this.adjustParticleCount(desired);
  }

  private adjustParticleCount(desired: number) {
    if (this.particles.length < desired) {
      this.seedParticles(desired - this.particles.length);
    } else if (this.particles.length > desired) {
      this.particles.length = desired;
    }
  }

  private seedParticles(n: number) {
    for (let i = 0; i < n; i++) {
      this.particles.push(this.makeParticle(Math.random() * this.w, Math.random() * this.h, true));
    }
  }

  private makeParticle(x: number, y: number, gentle: boolean): Particle {
    // Velocidad suave; "gentle" = más lento (para seed inicial)
    const speed = gentle ? 0.10 : 0.35;
    const angle = Math.random() * Math.PI * 2;

    return {
      x,
      y,
      vx: Math.cos(angle) * (Math.random() * speed + 0.04),
      vy: Math.sin(angle) * (Math.random() * speed + 0.04),
      r: Math.random() * 1.2 + 0.6,
      a: Math.random() * 0.45 + 0.15,
    };
  }

  private spawnBurst(x: number, y: number, count: number) {
    for (let i = 0; i < count; i++) {
      const p = this.makeParticle(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20, false);
      // empuje extra tipo "explosión"
      p.vx *= 2.2;
      p.vy *= 2.2;
      p.a = Math.min(0.9, p.a + 0.25);
      this.particles.push(p);
    }

    // No crecer infinito
    if (this.particles.length > this.maxCount) {
      this.particles.splice(0, this.particles.length - this.maxCount);
    }
  }

  private loop = () => {
    this.rafId = requestAnimationFrame(this.loop);
    this.tick();
    this.draw();
  };

  private tick() {
    // Parallax según mouse (muy leve)
    const px = this.mouseActive ? (this.mouseX / this.w - 0.5) * 0.25 : 0;
    const py = this.mouseActive ? (this.mouseY / this.h - 0.5) * 0.25 : 0;

    for (const p of this.particles) {
      p.x += p.vx + px;
      p.y += p.vy + py;

      // Wrap-around
      if (p.x < -20) p.x = this.w + 20;
      if (p.x > this.w + 20) p.x = -20;
      if (p.y < -20) p.y = this.h + 20;
      if (p.y > this.h + 20) p.y = -20;

      // Suavizar un poco tras bursts (vuelve a calma)
      p.vx *= 0.999;
      p.vy *= 0.999;
    }
  }

  private draw() {
    const ctx = this.ctx;

    // Fondo negro (no transparente)
    ctx.clearRect(0, 0, this.w, this.h);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, this.w, this.h);

    // Puntitos
    for (const p of this.particles) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Líneas sutiles entre cercanos (da efecto “pro”)
    const maxDist = 110;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < maxDist) {
          const alpha = (1 - d / maxDist) * 0.10; // muy sutil
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
           ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }
}
