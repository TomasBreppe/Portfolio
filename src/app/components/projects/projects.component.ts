import { Component, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LangService } from '../../services/lang.services';

type Project = {
  imgUrl: string;
  title: string;
  status: string;
  desc: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(public lang: LangService) {}

  featured = computed<Project>(() =>
    this.lang.lang() === 'es'
      ? {
          imgUrl: 'assets/cv/img/club-banco.png',
          title: 'Club Banco - Sistema de Gestión Deportiva',
          status: 'Destacado',
          desc: 'Aplicación web full stack desarrollada para digitalizar la administración de un club deportivo. Permite gestionar socios, disciplinas, cuotas, inscripciones, ingresos, gastos y dashboards financieros con autenticación JWT y despliegue en la nube.',
          stack: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'Angular',
            'PostgreSQL',
            'Supabase',
            'Render',
            'Netlify',
            'Chart.js',
          ],
          repoUrl: 'https://github.com/TomasBreppe/Club-Banco',
          demoUrl: 'https://club-banco.netlify.app',
        }
      : {
          imgUrl: 'assets/cv/img/club-banco.png',
          title: 'Club Banco - Sports Club Management System',
          status: 'Featured',
          desc: 'Full stack web application developed to digitize the administration of a sports club. It allows managing members, disciplines, monthly fees, registrations, income, expenses, and financial dashboards with JWT authentication and cloud deployment.',
          stack: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'Angular',
            'PostgreSQL',
            'Supabase',
            'Render',
            'Netlify',
            'Chart.js',
          ],
          repoUrl: 'https://github.com/TomasBreppe/Club-Banco',
          demoUrl: 'https://club-banco.netlify.app',
        },
  );

  others = computed<Project[]>(() =>
    this.lang.lang() === 'es'
      ? [
          {
            imgUrl: 'assets/cv/img/lautaro-diesel.png',
            title: 'LAUTARO DIESEL E-COMMERCE (Tesis)',
            status: 'Finalizado',
            desc: 'E-commerce full stack con arquitectura en capas, autenticación JWT, manejo de stock e integración con Mercado Pago.',
            stack: ['Java', 'Spring Boot', 'Angular', 'SQL Server', 'JWT', 'Mercado Pago'],
            repoUrl: 'https://github.com/TomasBreppe/LAUTARO-DIESEL-ECOMMERCE',
          },
          {
            imgUrl: 'assets/cv/img/hamburgueseria.png',
            title: 'Hamburguesería (Proyecto personal)',
            status: 'Finalizado',
            desc: 'Web en Angular con interfaz responsive, estructura por componentes y foco en una experiencia visual moderna.',
            stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            repoUrl: 'https://github.com/TomasBreppe/Hamburgueseria',
          },
        ]
      : [
          {
            imgUrl: 'assets/cv/img/lautaro-diesel.png',
            title: 'LAUTARO DIESEL E-COMMERCE (Thesis)',
            status: 'Completed',
            desc: 'Full stack e-commerce with layered architecture, JWT authentication, stock management, and Mercado Pago integration.',
            stack: ['Java', 'Spring Boot', 'Angular', 'SQL Server', 'JWT', 'Mercado Pago'],
            repoUrl: 'https://github.com/TomasBreppe/LAUTARO-DIESEL-ECOMMERCE',
          },
          {
            imgUrl: 'assets/cv/img/hamburgueseria.png',
            title: 'Burger Shop (Personal project)',
            status: 'Completed',
            desc: 'Angular website with responsive UI, component-based structure, and a modern visual approach.',
            stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            repoUrl: 'https://github.com/TomasBreppe/Hamburgueseria',
          },
        ],
  );
}