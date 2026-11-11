import { Component, computed } from '@angular/core';
import { NgFor } from '@angular/common';
import { LangService } from '../../services/lang.services';

type Item = { title: string; subtitle: string; tags: string[] };

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  constructor(public lang: LangService) {}

  experience = computed<Item[]>(() =>
    this.lang.lang() === 'es'
      ? [
          {
            title: 'Desarrollador Full Stack (Freelance) — Club Banco de Córdoba',
            subtitle: '2026 – actualidad · Sistema en producción · +500 socios',
            tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Angular'],
          },
          {
            title: 'Desarrollador Full Stack — E-commerce Lautaro Diesel',
            subtitle: '2025 – 2026 · Proyecto Final UTN',
            tags: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'SQL Server', 'Mercado Pago'],
          },
        ]
      : [
          {
            title: 'Full Stack Developer (Freelance) — Club Banco de Córdoba',
            subtitle: '2026 – present · Production system · 500+ members',
            tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Angular'],
          },
          {
            title: 'Full Stack Developer — Lautaro Diesel E-commerce',
            subtitle: '2025 – 2026 · UTN Final Project',
            tags: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'SQL Server', 'Mercado Pago'],
          },
        ]
  );

  education = computed<Item[]>(() =>
    this.lang.lang() === 'es'
      ? [
          {
            title: 'Tecnicatura Universitaria en Programación — UTN Facultad Regional Córdoba',
            subtitle: '2022 – 2026 · Finalizada',
            tags: ['Programación', 'Arquitectura de software', 'Bases de datos'],
          },
        ]
      : [
          {
            title: 'University Technical Degree in Programming — UTN Córdoba Regional Faculty',
            subtitle: '2022 – 2026 · Completed',
            tags: ['Programming', 'Software architecture', 'Databases'],
          },
        ]
  );
}
