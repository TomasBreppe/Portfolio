import { Component, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LangService } from '../../services/lang.services';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(public lang: LangService) {}

  strengths = computed(() =>
    this.lang.lang() === 'es'
      ? [
          'Resolución de problemas',
          'Arquitectura en capas',
          'Trabajo en equipo',
          'Aprendizaje Continuo',
          'Mantenibilidad',
          'Desarrollo orientado a negocio',
        ]
      : [
          'Problem solving',
          'Layered architecture',
          'Teamwork',
          'Continuous Learning',
          'Maintainability',
          'Business-oriented development',
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
            text: 'Proyecto final universitario e integración de sistemas de pago.',
          },
          {
            year: '2026',
            text: 'Desarrollo de Club Banco, sistema de gestión deportiva con reglas de negocio reales, dashboards financieros y despliegue completo. Creación de portfolio profesional y búsqueda de primeras oportunidades laborales.',
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
            text: 'Final university project and integration of payment systems.',
          },
          {
            year: '2026',
            text: 'Development of Club Banco, a sports management system with real business rules, financial dashboards and full deployment. Creation of a professional portfolio and pursuit of first professional opportunities.',
          },
        ],
  );
}
