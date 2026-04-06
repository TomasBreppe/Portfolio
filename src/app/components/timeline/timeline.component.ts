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
            title: 'Proyecto Tesis — Lautaro Diesel',
            subtitle: 'E-commerce · API REST · JWT · Mercado Pago',
            tags: ['Backend', 'Spring Boot', 'Angular'],
          },
        ]
      : [
          {
            title: 'Thesis Project — Lautaro Diesel',
            subtitle: 'E-commerce · REST API · JWT · Mercado Pago',
            tags: ['Backend', 'Spring Boot', 'Angular'],
          },
        ]
  );

  education = computed<Item[]>(() =>
    this.lang.lang() === 'es'
      ? [
          {
            title: 'UTN — Tecnicatura Universitaria en Programación',
            subtitle: 'Finalizada',
            tags: ['Programación', 'Arquitectura', 'Bases de datos'],
          },
        ]
      : [
          {
            title: 'UTN — University Technical Degree in Programming',
            subtitle: 'Completed',
            tags: ['Programming', 'Architecture', 'Databases'],
          },
        ]
  );
}
