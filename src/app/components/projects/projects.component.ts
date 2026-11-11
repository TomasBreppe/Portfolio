import { Component, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LangService } from '../../services/lang.services';

type Project = {
  imgUrl: string;
  title: string;
  status: string;
  desc: string;
  metrics?: string[];
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  privateDemo?: boolean;
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
          title: 'Club Banco — Sistema de gestión para club deportivo',
          status: 'En producción',
          desc: 'Aplicación web full stack que el Club Banco de Córdoba usa para administrar socios, disciplinas, categorías, aranceles, pagos, deudas, ingresos y gastos desde un panel privado para administradores. Backend: API REST con Java y Spring Boot en arquitectura en capas, con autenticación Spring Security + JWT y control de acceso por roles. Base de datos PostgreSQL en Supabase. Frontend en Angular con dashboards financieros en Chart.js y exportación de reportes a Excel. Despliegue: backend en Render y frontend en Netlify.',
          metrics: ['En producción', '+500 socios', '7 disciplinas', 'Dashboard financiero', 'Reportes Excel'],
          stack: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'APIs REST',
            'Angular',
            'PostgreSQL',
            'Supabase',
            'Render',
            'Netlify',
            'Chart.js',
          ],
          privateDemo: true,
        }
      : {
          imgUrl: 'assets/cv/img/club-banco.png',
          title: 'Club Banco — Sports club management system',
          status: 'In production',
          desc: 'Full stack web application used by Club Banco (Córdoba) to manage members, disciplines, categories, fees, payments, debts, income and expenses from a private admin panel. Backend: REST API built with Java and Spring Boot using a layered architecture, with Spring Security + JWT authentication and role-based access control. PostgreSQL database hosted on Supabase. Angular frontend with Chart.js financial dashboards and Excel report export. Deployed with the backend on Render and the frontend on Netlify.',
          metrics: ['In production', '500+ members', '7 disciplines', 'Financial dashboard', 'Excel reports'],
          stack: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'JWT',
            'REST APIs',
            'Angular',
            'PostgreSQL',
            'Supabase',
            'Render',
            'Netlify',
            'Chart.js',
          ],
          privateDemo: true,
        },
  );

  others = computed<Project[]>(() =>
    this.lang.lang() === 'es'
      ? [
          {
            imgUrl: 'assets/cv/img/lautaro-diesel.png',
            title: 'Lautaro Diesel — E-commerce',
            status: 'Proyecto final de carrera',
            desc: 'E-commerce full stack desarrollado como proyecto final de la Tecnicatura. Backend en Java y Spring Boot con arquitectura en capas, autenticación JWT y gestión de stock; frontend en Angular y TypeScript; persistencia en SQL Server y pagos online con Mercado Pago Checkout Pro.',
            stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Angular', 'TypeScript', 'SQL Server', 'Mercado Pago'],
            repoUrl: 'https://github.com/TomasBreppe/LAUTARO-DIESEL-ECOMMERCE',
          },
          {
            imgUrl: 'assets/cv/img/hamburgueseria.png',
            title: 'Hamburguesería — Sitio web',
            status: 'Proyecto personal',
            desc: 'Sitio web responsive desarrollado con Angular y TypeScript, con arquitectura basada en componentes y foco en la experiencia de usuario.',
            stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            repoUrl: 'https://github.com/TomasBreppe/Hamburgueseria',
          },
        ]
      : [
          {
            imgUrl: 'assets/cv/img/lautaro-diesel.png',
            title: 'Lautaro Diesel — E-commerce',
            status: 'Final degree project',
            desc: 'Full stack e-commerce built as my final degree project. Java and Spring Boot backend with layered architecture, JWT authentication and stock management; Angular and TypeScript frontend; SQL Server persistence and online payments with Mercado Pago Checkout Pro.',
            stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Angular', 'TypeScript', 'SQL Server', 'Mercado Pago'],
            repoUrl: 'https://github.com/TomasBreppe/LAUTARO-DIESEL-ECOMMERCE',
          },
          {
            imgUrl: 'assets/cv/img/hamburgueseria.png',
            title: 'Burger Shop — Website',
            status: 'Personal project',
            desc: 'Responsive website built with Angular and TypeScript, using a component-based architecture with a focus on user experience.',
            stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            repoUrl: 'https://github.com/TomasBreppe/Hamburgueseria',
          },
        ],
  );
}
