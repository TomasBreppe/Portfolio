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
          status: 'Proyecto Full Stack Principal',
          desc: 'Sistema web desarrollado para la administración integral de un club deportivo. Permite gestionar socios, disciplinas, categorías, aranceles, pagos, deudas, ingresos, gastos y balances financieros desde un panel privado para administradores. Incluye autenticación JWT, dashboards interactivos, exportación de reportes Excel y despliegue completo de frontend, backend y base de datos.',
          metrics: [
            '+270 socios administrados',
            '+7 disciplinas',
            'Dashboard financiero completo',
            'Exportación de reportes Excel',
          ],
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
          status: 'Main Full Stack Project',
          desc: 'Web system developed for the comprehensive administration of a sports club. It allows managing members, disciplines, categories, fees, payments, debts, income, expenses, and financial balances from a private admin panel. It includes JWT authentication, interactive dashboards, Excel report exports, and full deployment of frontend, backend, and database.',
          metrics: [
            '+270 managed members',
            '+7 disciplines',
            'Complete financial dashboard',
            'Excel report exports',
          ],
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
