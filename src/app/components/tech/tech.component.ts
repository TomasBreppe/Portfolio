import { Component, computed } from '@angular/core';
import { NgFor } from '@angular/common';
import { LangService } from '../../services/lang.services';

type Tech = { icon: string; name: string };
type TechGroup = { title: string; items: Tech[] };

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent {
  constructor(public lang: LangService) {}

  techGroups = computed<TechGroup[]>(() => [
    {
      title: this.lang.t('tech_backend'),
      items: [
        { icon: 'devicon-java-plain colored', name: 'Java' },
        { icon: 'devicon-spring-plain colored', name: 'Spring Boot' },
        { icon: 'devicon-spring-plain colored', name: 'Spring Security' },
        { icon: 'devicon-hibernate-plain colored', name: 'JPA / Hibernate' },
        { icon: 'devicon-fastapi-plain colored', name: 'APIs REST' },
        { icon: 'devicon-swagger-plain colored', name: 'Swagger / OpenAPI' },
        { icon: 'devicon-junit-plain colored', name: 'JUnit' },
      ],
    },
    {
      title: this.lang.t('tech_frontend'),
      items: [
        { icon: 'devicon-angularjs-plain colored', name: 'Angular' },
        { icon: 'devicon-typescript-plain colored', name: 'TypeScript' },
        { icon: 'devicon-html5-plain colored', name: 'HTML' },
        { icon: 'devicon-css3-plain colored', name: 'CSS' },
        { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
        { icon: 'devicon-chartjs-plain colored', name: 'Chart.js' },
      ],
    },
    {
      title: this.lang.t('tech_databases'),
      items: [
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
        { icon: 'devicon-microsoftsqlserver-plain colored', name: 'SQL Server' },
        { icon: 'devicon-mysql-original colored', name: 'MySQL' },
      ],
    },
    {
      title: this.lang.t('tech_tools'),
      items: [
        { icon: 'devicon-git-plain colored', name: 'Git' },
        { icon: 'devicon-github-original colored', name: 'GitHub' },
        { icon: 'devicon-docker-plain colored', name: 'Docker' },
        { icon: 'devicon-postman-plain colored', name: 'Postman' },
        { icon: 'devicon-azure-plain colored', name: 'Render' },
        { icon: 'devicon-netlify-plain colored', name: 'Netlify' },
        { icon: 'devicon-supabase-plain colored', name: 'Supabase' },
      ],
    },
  ]);
}