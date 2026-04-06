import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LangService } from '../../services/lang.services';

type Tech = { icon: string; name: string };

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent {
  constructor(public lang: LangService) {}

  techs: Tech[] = [
    { icon: 'devicon-java-plain colored', name: 'Java' },
    { icon: 'devicon-spring-plain colored', name: 'Spring Boot' },
    { icon: 'devicon-spring-plain colored', name: 'Spring Security (JWT)' },
    { icon: 'devicon-fastapi-plain colored', name: 'APIs REST' },
    { icon: 'devicon-hibernate-plain colored', name: 'JPA / Hibernate' },
    { icon: 'devicon-microsoftsqlserver-plain colored', name: 'SQL Server' },
    { icon: 'devicon-swagger-plain colored', name: 'Swagger / OpenAPI' },
    { icon: 'devicon-junit-plain colored', name: 'Testing (JUnit)' },
    { icon: 'devicon-docker-plain colored', name: 'Docker' },
    { icon: 'devicon-github-original colored', name: 'Git & GitHub' },
    { icon: 'devicon-mysql-original colored', name: 'MySQL' },
    { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
  ];
}
