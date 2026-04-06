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
     Enfoque: conseguir experiencia (flexible en tecnología),
     mostrando proyectos reales y profesionalismo.
  ================================================== */
  private dict: Dict = {
    /* NAV */
    nav_featured: { es: 'Proyecto Destacado', en: 'Featured Project' },
    nav_projects: { es: 'Proyectos', en: 'Projects' },
    nav_about: { es: 'Sobre mí', en: 'About' },
    nav_contact: { es: 'Contacto', en: 'Contact' },

    /* HERO */
    hero_pill: {
      es: 'Java · Spring Boot · Angular · TypeScript · SQL · Docker · Integraciones',
      en: 'Java · Spring Boot · Angular · TypeScript · SQL · Docker · Integrations',
    },

    hero_subtitle_html: {
      es: `Técnico Universitario en Programación (UTN) | Desarrollador Web`,
      en: `University Programming Technician (UTN) | Software Developer`,
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
      es: 'Full Time',
      en: 'Full Time',
    },

    hero_focus_k: {
      es: 'Enfoque',
      en: 'Focus',
    },
    hero_focus_v: {
      es: 'Proyectos reales · Buenas prácticas · Aprendizaje continuo',
      en: 'Real projects · Best practices · Continuous learning',
    },

    hero_star_k: {
      es: 'Proyecto destacado',
      en: 'Star project',
    },
    hero_star_v: {
      es: 'Club Banco',
      en: 'Club Banco',
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
      es: 'Me gusta construir soluciones completas: desde la API hasta la experiencia del usuario.',
      en: 'I enjoy building complete solutions—from APIs to user experience.',
    },

    about_body_1: {
      es: 'Soy Técnico Universitario en Programación (UTN FR Córdoba). Empecé a estudiar programación en 2022 y desde entonces vengo construyendo proyectos para consolidar fundamentos, buenas prácticas y calidad de código.',
      en: 'I am a University Programming Technician (UTN Córdoba). I started studying programming in 2022 and since then I have been building projects to strengthen fundamentals, best practices and code quality.',
    },

    about_body_2: {
      es: 'Me adapto a distintas tecnologías según el desafío. Trabajo con Java y Spring Boot para APIs REST, SQL para modelar datos, y Angular/TypeScript en el frontend. Me importa la arquitectura, la mantenibilidad, las validaciones de negocio y un manejo de errores claro.',
      en: 'I adapt to different technologies depending on the challenge. I use Java and Spring Boot for REST APIs, SQL for data modeling, and Angular/TypeScript on the frontend. I care about architecture, maintainability, business validations, and clear error handling.',
    },

    about_strengths_title: {
      es: 'Fortalezas',
      en: 'Strengths',
    },

    about_path_title: {
      es: 'Mi camino',
      en: 'My journey',
    },

    /* MI CAMINO (2022+) */
    path_2022_y: { es: '2022', en: '2022' },
    path_2022_t: {
      es: 'Inicio en programación. Fundamentos de lógica, Java y bases de datos.',
      en: 'Started programming. Fundamentals of logic, Java and databases.',
    },

    path_2023_y: { es: '2023', en: '2023' },
    path_2023_t: {
      es: 'Primeros proyectos completos. APIs REST con Spring Boot y arquitectura en capas.',
      en: 'First complete projects. REST APIs with Spring Boot and layered architecture.',
    },

    path_2024_y: { es: '2024', en: '2024' },
    path_2024_t: {
      es: 'Profundización en seguridad y buenas prácticas: JWT + roles, validaciones y manejo consistente de errores.',
      en: 'Deeper focus on security and best practices: JWT + roles, validations and consistent error handling.',
    },

    path_2025_y: { es: '2025', en: '2025' },
    path_2025_t: {
      es: 'Proyecto final universitario: Lautaro Diesel E-Commerce. Integración con Mercado Pago (Checkout Pro + Webhooks), stock y reglas de negocio.',
      en: 'Final university project: Lautaro Diesel E-Commerce. Mercado Pago integration (Checkout Pro + Webhooks), stock and business rules.',
    },

    about_mission_title: {
      es: 'Mi misión como desarrollador',
      en: 'My mission as a developer',
    },

    about_mission_text: {
      es: 'Construir software confiable y bien diseñado. Escribir código claro, tomar decisiones técnicas con criterio y mejorar continuamente a través de proyectos reales y feedback.',
      en: 'To build reliable, well-designed software. Write clear code, make thoughtful technical decisions and continuously improve through real projects and feedback.',
    },

    /* TECH */
    tech_title: {
      es: 'Tecnologías y Stack Principal',
      en: 'Core Technologies & Stack',
    },

    /* FOCUS */
    focus_title: {
      es: 'Mi enfoque como desarrollador',
      en: 'My approach as a developer',
    },

    focus_p1: {
      es: 'Para mí desarrollar software no es solo “que funcione”: es que sea fácil de mantener, escale bien y se entienda. Me gusta ordenar el código, separar responsabilidades y dejar una base sólida para seguir iterando.',
      en: 'For me, software development is not just “making it work”: it should be maintainable, scalable and easy to understand. I like organizing code, separating responsibilities and building a solid base to keep iterating.',
    },

    focus_p2_html: {
      es: 'Construyo <b>APIs REST</b> y aplicaciones <b>full stack</b> con validaciones reales del negocio, seguridad cuando aplica (por ejemplo <b>JWT + roles</b>), manejo de errores consistente y documentación clara. Priorizo calidad, comunicación y aprendizaje continuo.',
      en: 'I build <b>REST APIs</b> and <b>full stack</b> applications with real business validations, security when needed (e.g., <b>JWT + roles</b>), consistent error handling and clear documentation. I prioritize quality, communication and continuous learning.',
    },

    /* PROJECTS */
    projects_featured_k: {
      es: 'Proyecto Destacado',
      en: 'Featured Project',
    },

    projects_featured_placeholder: {
      es: 'Lautaro Diesel',
      en: 'Lautaro Diesel',
    },

    projects_others_k: {
      es: 'Otros Proyectos',
      en: 'Other Projects',
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
      es: 'Experiencia y Educación',
      en: 'Experience & Education',
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

    contact_meta: {
      es: 'Argentina (UTC-3) · Remoto · Disponibilidad Full Time',
      en: 'Argentina (UTC-3) · Remote · Full Time Availability',
    },

    btn_copy: {
      es: 'Copiar',
      en: 'Copy',
    },

    btn_view_cv: {
      es: 'Ver CV',
      en: 'View CV',
    },
  };
}
