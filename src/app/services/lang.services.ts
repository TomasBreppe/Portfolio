import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

type Dict = Record<string, { es: string; en: string }>;

@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly KEY = 'portfolio_lang';

  lang = signal<Lang>((localStorage.getItem(this.KEY) as Lang) || 'es');

  toggle() {
    const next: Lang = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    localStorage.setItem(this.KEY, next);
  }

  t(key: keyof Dict | string): string {
    const item = this.dict[key as keyof Dict];
    if (!item) return String(key);
    return item[this.lang()];
  }

  /* ==================================================
     DICCIONARIO COMPLETO (ES / EN)
     Perfil: Java Developer Junior orientado a backend.
     Mantener alineado con el CV (títulos, números y stack).
  ================================================== */
  private dict: Dict = {
    /* NAV */
    nav_home: { es: 'Inicio', en: 'Home' },
    nav_featured: { es: 'Proyecto destacado', en: 'Featured project' },
    nav_projects: { es: 'Proyectos', en: 'Projects' },
    nav_about: { es: 'Sobre mí', en: 'About' },
    nav_contact: { es: 'Contacto', en: 'Contact' },

    /* HERO */
    hero_pill: {
      es: 'Desarrollador Full Stack Junior | Java Developer · Spring Boot · Angular',
      en: 'Junior Full Stack Developer | Java Developer · Spring Boot · Angular',
    },

    hero_subtitle_html: {
      es: 'Técnico Universitario en Programación (UTN) · Desarrollador backend Java con experiencia en Angular',
      en: 'University Technician in Programming (UTN) · Backend Java developer with Angular experience',
    },

    hero_quick: {
      es: '→ Ver proyecto destacado',
      en: '→ See featured project',
    },

    hero_availability_k: {
      es: 'Disponibilidad',
      en: 'Availability',
    },
    hero_availability_v: {
      es: 'Full time · Córdoba, Argentina · Presencial, híbrido o remoto',
      en: 'Full time · Córdoba, Argentina · On-site, hybrid or remote',
    },

    hero_focus_k: {
      es: 'En producción',
      en: 'In production',
    },
    hero_focus_v: {
      es: 'Club Banco — sistema de gestión con +500 socios activos',
      en: 'Club Banco — management system with 500+ active members',
    },

    hero_star_k: {
      es: 'Stack principal',
      en: 'Core stack',
    },
    hero_star_v: {
      es: 'Java · Spring Boot · PostgreSQL · Angular',
      en: 'Java · Spring Boot · PostgreSQL · Angular',
    },

    btn_download_cv: {
      es: 'Descargar CV',
      en: 'Download CV',
    },

    /* ABOUT */
    about_title: {
      es: 'Sobre mí',
      en: 'About me',
    },

    about_quote: {
      es: 'Del modelo de datos al despliegue en producción.',
      en: 'From data model to production deployment.',
    },

    about_body_1: {
      es: 'Soy Técnico Universitario en Programación por la UTN y Desarrollador Full Stack Junior, con orientación al desarrollo backend utilizando Java y Spring Boot. Cuento con experiencia práctica en el desarrollo de aplicaciones web, diseño de APIs REST, implementación de autenticación y autorización con Spring Security y JWT, y gestión de bases de datos PostgreSQL.',
      en: 'I am a University Technician in Programming from UTN and a Junior Full Stack Developer, focused on backend development with Java and Spring Boot. I have hands-on experience building web applications, designing REST APIs, implementing authentication and authorization with Spring Security and JWT, and managing PostgreSQL databases.',
    },

    about_body_2: {
      es: 'Desarrollé y desplegué un sistema de gestión actualmente en producción, utilizado por más de 500 socios.',
      en: 'I built and deployed a management system currently in production, used by more than 500 members.',
    },

    about_body_3: {
      es: 'Me interesa incorporarme a un equipo de desarrollo donde pueda aportar mis conocimientos y continuar creciendo profesionalmente.',
      en: 'I am looking to join a development team where I can contribute my knowledge and continue growing professionally.',
    },

    about_strengths_title: {
      es: 'Qué aporto',
      en: 'What I bring',
    },

    about_path_title: {
      es: 'Mi camino',
      en: 'My journey',
    },

    /* TECH */
    tech_title: {
      es: 'Stack tecnológico',
      en: 'Tech stack',
    },
    tech_languages: {
      es: 'Lenguajes',
      en: 'Languages',
    },
    tech_backend: {
      es: 'Backend',
      en: 'Backend',
    },
    tech_frontend: {
      es: 'Frontend',
      en: 'Frontend',
    },
    tech_databases: {
      es: 'Bases de datos',
      en: 'Databases',
    },
    tech_tools: {
      es: 'Herramientas y deploy',
      en: 'Tools & deployment',
    },

    /* FOCUS → "Cómo trabajo" */
    focus_title: {
      es: 'Cómo trabajo',
      en: 'How I work',
    },
    focus_b1: {
      es: 'Organizo el código en capas (controller, service, repository) aplicando MVC y principios SOLID.',
      en: 'I structure code in layers (controller, service, repository) following MVC and SOLID principles.',
    },
    focus_b2: {
      es: 'Aplico validaciones de negocio y manejo de errores consistente en las APIs.',
      en: 'I apply business validations and consistent error handling across APIs.',
    },
    focus_b3: {
      es: 'Documento endpoints con Swagger/OpenAPI y los pruebo con Postman, JUnit y Mockito.',
      en: 'I document endpoints with Swagger/OpenAPI and test them with Postman, JUnit and Mockito.',
    },

    projects_private_note: {
      es: '🔒 Proyecto privado: el código y el sistema contienen datos reales del cliente. Puedo mostrarlo en vivo durante una entrevista.',
      en: '🔒 Private project: the code and system hold real client data. I can walk you through it live during an interview.',
    },

    /* PROJECTS */
    projects_featured_k: {
      es: 'Proyecto destacado',
      en: 'Featured project',
    },
    projects_others_k: {
      es: 'Otros proyectos',
      en: 'Other projects',
    },
    btn_view_github: {
      es: 'Ver en GitHub',
      en: 'View on GitHub',
    },
    btn_view_demo: {
      es: 'Ver demo',
      en: 'Live demo',
    },

    /* TIMELINE */
    timeline_title: {
      es: 'Experiencia y educación',
      en: 'Experience & education',
    },
    timeline_exp_k: {
      es: 'Experiencia',
      en: 'Experience',
    },
    timeline_edu_k: {
      es: 'Educación',
      en: 'Education',
    },

    /* CONTACT */
    contact_title: {
      es: 'Contacto',
      en: 'Contact',
    },
    contact_cta: {
      es: '¿Tenés una búsqueda Java o Full Stack Junior? Escribime.',
      en: 'Hiring for a Junior Java or Full Stack role? Get in touch.',
    },
    contact_meta: {
      es: 'Córdoba, Argentina (UTC-3) · Presencial, híbrido o remoto · Full time',
      en: 'Córdoba, Argentina (UTC-3) · On-site, hybrid or remote · Full time',
    },
    btn_copy: {
      es: 'Copiar',
      en: 'Copy',
    },
    btn_view_cv: {
      es: 'Ver CV',
      en: 'View CV',
    },

    /* FOOTER */
    footer_role: {
      es: 'Desarrollador Full Stack Junior',
      en: 'Junior Full Stack Developer',
    },
  };
}
