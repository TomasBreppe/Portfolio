import { Component, computed } from '@angular/core';
import { NgFor } from '@angular/common';
import { LangService } from '../../services/lang.services';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(public lang: LangService) {}

  strengths = computed(() =>
    this.lang.lang() === 'es'
      ? [
          'APIs REST con Spring Boot',
          'Seguridad con JWT y roles',
          'Modelado de bases de datos relacionales',
          'Arquitectura en capas',
          'Despliegue en la nube',
          'Integración de pagos con Mercado Pago',
        ]
      : [
          'REST APIs with Spring Boot',
          'JWT & role-based security',
          'Relational database modeling',
          'Layered architecture',
          'Cloud deployment',
          'Mercado Pago payment integration',
        ],
  );

  timeline = computed(() =>
    this.lang.lang() === 'es'
      ? [
          {
            year: '2022',
            text: 'Fundamentos de programación, Java y bases de datos.',
          },
          {
            year: '2023',
            text: 'Desarrollo de APIs REST y arquitectura en capas.',
          },
          {
            year: '2024',
            text: 'Seguridad, JWT, validaciones y buenas prácticas.',
          },
          {
            year: '2025',
            text: 'Proyecto final: e-commerce Lautaro Diesel con Spring Boot, Angular e integración con Mercado Pago.',
          },
          {
            year: '2026',
            text: 'Desarrollo y puesta en producción de Club Banco: sistema de gestión con reglas de negocio reales, dashboards financieros y despliegue completo.',
          },
        ]
      : [
          {
            year: '2022',
            text: 'Programming fundamentals, Java and databases.',
          },
          {
            year: '2023',
            text: 'Development of REST APIs and layered architecture.',
          },
          {
            year: '2024',
            text: 'Security, JWT, validations and best practices.',
          },
          {
            year: '2025',
            text: 'Final degree project: Lautaro Diesel e-commerce with Spring Boot, Angular and Mercado Pago integration.',
          },
          {
            year: '2026',
            text: 'Built and launched Club Banco to production: a management system with real business rules, financial dashboards and full deployment.',
          },
        ],
  );
}
