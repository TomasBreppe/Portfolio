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
      es: 'Full Stack Developer Jr. | Java · Spring Boot · Angular',
      en: 'Full Stack Developer Jr. | Java · Spring Boot · Angular',
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
      es: 'Construyo soluciones completas, desde la lógica de negocio hasta la experiencia del usuario.',
      en: 'I build complete solutions, from business logic to user experience.',
    },

    about_body_1: {
      es: 'Soy Técnico Universitario en Programación (UTN FRC Córdoba). con orientación al desarrollo backend utilizando Java, Spring Boot y SQL. Me especializo en la construcción de APIs REST, modelado de bases de datos relacionales y desarrollo de aplicaciones web full stack con Angular.',
      en: 'I am a University Technician in Programming (UTN FRC Córdoba) specializing in backend development using Java, Spring Boot, and SQL. I specialize in building REST APIs, modeling relational databases, and developing full-stack web applications with Angular.',
    },

    about_body_2: {
      es: 'Actualmente desarrollo proyectos que integran lógica de negocio, autenticación, persistencia de datos y visualización de información, aplicando arquitectura en capas y buenas prácticas de desarrollo.',
      en: 'I currently develop projects that integrate business logic, authentication, data persistence, and information visualization, applying layered architecture and best development practices.',
    },

    about_strengths_title: {
      es: 'QUÉ APORTO',
      en: 'WHAT I CONTRIBUTE',
    },

    about_path_title: {
      es: 'Mi camino',
      en: 'My journey',
    },

    /* MI CAMINO (2022+) */
    path_2022_y: { es: '2022', en: '2022' },
    path_2022_t: {
      es: 'Fundamentos de programación, Java y bases de datos.',
      en: 'Programming fundamentals, Java and databases.',
    },

    path_2023_y: { es: '2023', en: '2023' },
    path_2023_t: {
      es: 'Desarrollo de APIs REST y arquitectura en capas.',
      en: 'Development of REST APIs and layered architecture.',
    },

    path_2024_y: { es: '2024', en: '2024' },
    path_2024_t: {
      es: 'Seguridad, JWT, validaciones y buenas prácticas.',
      en: 'Security, JWT, validations and best practices.',
    },

    path_2025_y: { es: '2025', en: '2025' },
    path_2025_t: {
      es: 'Proyecto final universitario e integración de sistemas de pago.',
      en: 'Final university project and integration of payment systems.',
    },

    path_2026_y: { es: '2026', en: '2026' },
    path_2026_t: {
      es: 'Desarrollo de Club Banco, sistema de gestión deportiva con reglas de negocio reales, dashboards financieros y despliegue completo. Creación de portfolio profesional y búsqueda de primeras oportunidades laborales.',
      en: 'Development of Club Banco, a sports management system with real business rules, financial dashboards, and full deployment. Creation of a professional portfolio and pursuit of first professional opportunities.',
    },

    about_mission_title: {
      es: 'Mi misión como desarrollador',
      en: 'My mission as a developer',
    },

    about_mission_text: {
      es: 'Mi objetivo es desarrollar soluciones que aporten valor real a las personas y organizaciones. Me interesa construir aplicaciones mantenibles, resolver problemas concretos y seguir creciendo profesionalmente a través de proyectos, trabajo en equipo y aprendizaje continuo.',
      en: 'My goal is to develop solutions that deliver real value to individuals and organizations. I am interested in building maintainable applications, solving concrete problems, and continuing to grow professionally through projects, teamwork, and continuous learning.',
    },

    /* TECH */
    tech_title: {
      es: 'Tecnologías y Stack Principal',
      en: 'Core Technologies & Stack',
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
      es: 'Bases de Datos',
      en: 'Databases',
    },

    tech_tools: {
      es: 'Herramientas y Deploy',
      en: 'Tools & Deployment',
    },

    /* FOCUS */
    focus_title: {
      es: 'Mi enfoque como desarrollador',
      en: 'My approach as a developer',
    },

    focus_p1: {
      es: 'Me enfoco en desarrollar software mantenible, escalable y fácil de comprender. Me gusta organizar el código, separar responsabilidades y construir una base sólida que facilite la evolución del proyecto.',
      en: 'I focus on developing maintainable, scalable, and easy-to-understand software. I enjoy organizing code, separating responsibilities, and building a solid foundation that facilitates project evolution.',
    },

    focus_p2_html: {
      es: 'Desarrollo APIs REST y aplicaciones full stack aplicando validaciones de negocio, seguridad, manejo consistente de errores y documentación clara. Priorizo la calidad, la comunicación y el aprendizaje continuo.',
      en: 'I develop REST APIs and full-stack applications, applying business validations, security, consistent error handling, and clear documentation. I prioritize quality, communication, and continuous learning.',
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
