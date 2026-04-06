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
          'Pensamiento lógico',
          'Resolución de problemas',
          'Código limpio',
          'Arquitectura en capas',
          'Proactividad y trabajo en equipo',
        ]
      : [
          'Logical thinking',
          'Problem solving',
          'Clean code',
          'Layered architecture',
          'Proactive teamwork',
        ]
  );

  timeline = computed(() =>
    this.lang.lang() === 'es'
      ? [
          {
            year: '2022',
            text: 'Inicio en programación. Fundamentos de lógica, algoritmos, Java y bases de datos.',
          },
          {
            year: '2023',
            text: 'Primeros proyectos completos. Desarrollo de APIs REST y práctica constante con Git y SQL.',
          },
          {
            year: '2024',
            text: 'Consolidación en Java + Spring Boot. Arquitectura en capas, validaciones, manejo de errores y seguridad con JWT.',
          },
          {
            year: '2025',
            text: 'Proyecto final universitario: Lautaro Diesel E-Commerce. Integración con Mercado Pago (Checkout Pro + Webhooks), stock y reglas de negocio con enfoque profesional.',
          },
        ]
      : [
          {
            year: '2022',
            text: 'Started programming. Fundamentals of logic, algorithms, Java and databases.',
          },
          {
            year: '2023',
            text: 'First complete projects. REST API development and consistent practice with Git and SQL.',
          },
          {
            year: '2024',
            text: 'Solid focus on Java + Spring Boot. Layered architecture, validations, error handling and JWT-based security.',
          },
          {
            year: '2025',
            text: 'Final university project: Lautaro Diesel E-Commerce. Mercado Pago integration (Checkout Pro + Webhooks), stock management and business rules with a professional approach.',
          },
        ]
  );
}
