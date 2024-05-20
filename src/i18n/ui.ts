export const languages = {
  en: "English",
  es: "Español",
};

export function getOtherLanguage(currentLanguage: "en" | "es"): "en" | "es" {
  return currentLanguage === "en" ? "es" : "en";
}

export const defaultLang = "es";

export const ui = {
  es: {
    sobreMiTitle: "Sobre mí",
    experienciaTitle: "Experiencia laboral",
    educacionTitle: "Educación",
    habilidadesTitle: "Habilidades",
    proyectosTitle: "Proyectos",
    expirienceTimeNow: "Actualidad",
    responsibilities: "Responsabilidades",
    objetivosLogrados: "Objetivos Logrados",
    modalSection: {
      title: "Contactar",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      subject: "Asunto",
      send: "Enviar",
    },
    basics: {
      name: "Samuel Junior Charles Saint-Jean",
      label: "Ingeniero de software | Desarrollador Web | Desarrollador Móvil",
      image: "",
      email: "samuelcharlessj30@gmail.com",
      phone: "+1 829 906 1039",
      url: "",
      summary:
        "Soy un ingeniero de software especializado en desarrollo web y móvil, con sólidos conocimientos adquiridos a través de proyectos académicos y prácticas freelance. Me apasiona crear soluciones tecnológicas innovadoras y soy proactivo, responsable y colaborativo en equipos de trabajo. Constantemente me actualizo con cursos y certificaciones para seguir creciendo profesionalmente. Busco integrarme a un equipo donde pueda aplicar mis habilidades y seguir aprendiendo y creciendo como desarrollador.",
      location: {
        address: "",
        postalCode: "",
        city: "Santo Domingo",
        countryCode: "RD",
        region: "República Dominicana",
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "",
          url: "https://www.linkedin.com/in/samuel-junior-matheo-charles-saint-jean-7398061b6/",
        },

        {
          network: "GitHub",
          username: "samyrd309",
          url: "https://github.com/samyrd309",
        },
      ],
    },
    work: [
      {
        name: "Metaconxept | Banreservas",
        position: "Desarrollador Externo Junior",
        url: "",
        startDate: "Agosto 2023",
        endDate: "Actualidad",
        summary: [
          "Desarrollo de APIs RESTful escalables, integración de bases de datos SQL Server y servicios externos.",
          "Automatización de procesos de carga de datos con C# y experiencia en SSIS (Integration Services).",
        ],
        highlights: [""],
      },
      {
        name: "Quantum Digital Innovation Factory",
        position: "Desarrollador Web Front-End",
        url: "",
        startDate: "Junio 2023",
        endDate: "Septiembre 2023",
        summary: [
          "Desarrollo de módulos de facturación y gestión de bases de datos SQL Server para ERP haciendo uso de tecnologias C# y React.",
        ],
        highlights: [""],
      },
      {
        name: "Intecnología",
        position: "Desarrollador Móvil",
        url: "",
        startDate: "Octubre 2022",
        endDate: "Noviembre 2022",
        summary: [
          "Desarrollo de aplicación para celular que escanea códigos QR de los puestos de exibición haciendo uso de React-Native.",
        ],
        highlights: [""],
      },
    ],
    volunteer: [
      {
        organization: "Organization",
        position: "Volunteer",
        url: "https://organization.com/",
        startDate: "2012-01-01",
        endDate: "2013-01-01",
        summary: "Description…",
        highlights: ["Awarded 'Volunteer of the Month'"],
      },
    ],
    education: [
      {
        institution: "Codecademy",
        url: "#",
        area: "Cerrificado en desarrollo Front-End",
        studyType: "Bachelor",
        startDate: "2021-01-01",
        endDate: null,
        score: "3.86",
        courses: ["DB1101 - Basic SQL"],
      },
      {
        institution: "Instituto Tecnológico de Santo Domingo (INTEC)",
        url: "https://portal.etitulo.com/visor.aspx?o=p&id=nLqGk",
        area: "Grado en ingeniería de software",
        studyType: "Bachelor",
        startDate: "2021-01-01",
        endDate: "2025-01-01",
        score: "3.86",
        courses: ["DB1101 - Basic SQL"],
      },
      {
        institution: "Colegio Pre-Universitario Luis Alfredo Duvergé Mejía",
        url: "#",
        area: "Bachiller técnico en informática",
        studyType: "Bachelor",
        startDate: "2018-01-01",
        endDate: "2021-01-01",
        score: "3.86",
        courses: ["DB1101 - Basic SQL"],
      },

    ],
    awards: [
      {
        title: "Award",
        date: "2014-11-01",
        awarder: "Company",
        summary: "There is no spoon.",
      },
    ],
    certificates: [
      {
        name: "Front-End Web Developer",
        startDate: "2023-12-01",
        endDate: null,
        issuer: "CodeCademy",
        url: "https://certificate.com",
      },
    ],
    publications: [
      {
        name: "Publication",
        publisher: "Company",
        releaseDate: "2014-10-01",
        url: "https://publication.com",
        summary: "Description…",
      },
    ],
    skills: [
      {
        name: "HTML",
        level: "Master",
        keywords: ["Web Development", "Frontend"],
      },
      {
        name: "CSS",
        level: "Master",
        keywords: ["Web Development", "Frontend", "Responsive Design"],
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        keywords: ["Web Development", "Frontend", "Backend", "Fullstack"],
      },
      {
        name: "TypeScript",
        level: "Basic",
        keywords: [
          "Web Development",
          "Frontend",
          "Backend",
          "JavaScript Superset",
        ],
      },
      {
        name: "Microsoft SQL",
        level: "Intermediate",
        keywords: ["Databases", "SQL", "Data Storage", "Backend"],
      },
      {
        name: "Git",
        level: "Advanced",
        keywords: ["Version Control", "Collaboration", "Source Code"],
      },
      {
        name: "GitHub",
        level: "Advanced",
        keywords: ["Version Control", "Collaboration", "Source Code", "Git"],
      },
      {
        name: "React",
        level: "Basic",
        keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "React-Native",
        level: "Basic",
        keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "Astro",
        level: "Basic",
        keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "C#",
        level: "Intermediate",
        keywords: ["Web Development", "Frontend", "Backend"],
      },
      {
        name: "ASP.NET",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "DevOps",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Figma",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "SCRUM",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Bootstrap",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Expo",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Python",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Razor",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "DreamViewer",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
    ],
    languages: [
      {
        language: "Spanish",
        fluency: "Native speaker",
      },
      {
        language: "English",
        fluency: "Advanced",
      },
    ],
    interests: [
      {
        name: "Wildlife",
        keywords: ["Ferrets", "Unicorns"],
      },
    ],
    references: [
      {
        name: "Jane Doe",
        reference: "Reference…",
      },
    ],
    projects: [
      {
        name: "OMSAPP",
        isActive: false,
        description:
          "Sistema gestor de rutas de autobuses, autobuses, paradas y estimación de llegada en tiempo real de autobus.",
        highlights: [
          "React",
          "React-Native",
          "Microsoft SQL Server",
          "SignalR",
        ],
        url: "#",
      },
    ],
  },
  en: {
    sobreMiTitle: "About Me",
    experienciaTitle: "Work Experience",
    educacionTitle: "Education",
    habilidadesTitle: "Skills",
    proyectosTitle: "Projects",
    expirienceTimeNow: "Present",
    responsibilities: "Responsibilities",
    achievedObjectives: "Achieved Objectives",
    modalSection: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      subject: "Subject",
      send: "Send",
    },
    basics: {
      name: "Samuel Junior Charles Saint-Jean",
      label: "Software Engineer | Web Developer | Mobile Developer",
      image: "",
      email: "samuelcharlessj30@gmail.com",
      phone: "+1 829 906 1039",
      url: "",
      summary:
        "I am a software engineer specialized in web and mobile development, with solid knowledge gained through academic projects and freelance work. I am passionate about creating innovative technological solutions and am proactive, responsible, and collaborative in team environments. I constantly update my skills through courses and certifications to continue growing professionally. I am looking to join a team where I can apply my skills and continue learning and growing as a developer.",
      location: {
        address: "",
        postalCode: "",
        city: "Santo Domingo",
        countryCode: "DO",
        region: "Dominican Republic",
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "",
          url: "https://www.linkedin.com/in/samuel-junior-matheo-charles-saint-jean-7398061b6/",
        },
        {
          network: "GitHub",
          username: "samyrd309",
          url: "https://github.com/samyrd309",
        },
      ],
    },
    work: [
      {
        name: "Metaconxept | Banreservas",
        position: "Junior External Developer",
        url: "",
        startDate: "August 2023",
        endDate: "Present",
        summary: [
          "Development of scalable RESTful APIs, integration of SQL Server databases, and external services.",
          "Automation of data loading processes with C# and experience with SSIS (Integration Services).",
        ],
        highlights: [""],
      },
      {
        name: "Quantum Digital Innovation Factory",
        position: "Front-End Web Developer",
        url: "",
        startDate: "June 2023",
        endDate: "September 2023",
        summary: [
          "Development of billing modules and SQL Server database management for ERP using C# and React technologies.",
        ],
        highlights: [""],
      },
      {
        name: "Intecnología",
        position: "Mobile Developer",
        url: "",
        startDate: "October 2022",
        endDate: "November 2022",
        summary: [
          "Development of a mobile application that scans QR codes of exhibition booths using React-Native.",
        ],
        highlights: [""],
      },
    ],
    volunteer: [
      {
        organization: "Organization",
        position: "Volunteer",
        url: "https://organization.com/",
        startDate: "2012-01-01",
        endDate: "2013-01-01",
        summary: "Description…",
        highlights: ["Awarded 'Volunteer of the Month'"],
      },
    ],
    education: [
      {
        institution: "Codecademy",
        url: "https://www.codecademy.com/profiles/scharles30",
        area: "Front-End Development Certificate",
        studyType: "Bachelor",
        startDate: "2021-01-01",
        endDate: null,
        score: "3.86",
        courses: ["DB1101 - Basic SQL"],
      },
      {
        institution: "Instituto Tecnológico de Santo Domingo (INTEC)",
        url: "https://portal.etitulo.com/visor.aspx?o=p&id=nLqGk",
        area: "Bachelor's Degree in Software Engineering",
        studyType: "Bachelor",
        startDate: "2021-01-01",
        endDate: "2024-01-01",
        score: "3.86",
        courses: ["DB1101 - Basic SQL"],
      },
      {
        institution: "Colegio Pre-Universitario Luis Alfredo Duvergé Mejía",
        url: "",
        area: "Bachiller técnico en informática",
        studyType: "Bachelor",
        startDate: "2018-01-01",
        endDate: "2021-01-01",
        score: "3.86",
        courses: ["DB1101 - Basic SQL"],
      },
    ],
    awards: [
      {
        title: "Award",
        date: "2014-11-01",
        awarder: "Company",
        summary: "There is no spoon.",
      },
    ],
    certificates: [
      {
        name: "Front-End Web Developer",
        startDate: "2023-12-01",
        endDate: null,
        issuer: "CodeCademy",
        url: "https://certificate.com",
      },
    ],
    publications: [
      {
        name: "Publication",
        publisher: "Company",
        releaseDate: "2014-10-01",
        url: "https://publication.com",
        summary: "Description…",
      },
    ],
    skills: [
      {
        name: "HTML",
        level: "Master",
        keywords: ["Web Development", "Frontend"],
      },
      {
        name: "CSS",
        level: "Master",
        keywords: ["Web Development", "Frontend", "Responsive Design"],
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        keywords: ["Web Development", "Frontend", "Backend", "Fullstack"],
      },
      {
        name: "TypeScript",
        level: "Basic",
        keywords: [
          "Web Development",
          "Frontend",
          "Backend",
          "JavaScript Superset",
        ],
      },
      {
        name: "Microsoft SQL",
        level: "Intermediate",
        keywords: ["Databases", "SQL", "Data Storage", "Backend"],
      },
      {
        name: "Git",
        level: "Advanced",
        keywords: ["Version Control", "Collaboration", "Source Code"],
      },
      {
        name: "GitHub",
        level: "Advanced",
        keywords: ["Version Control", "Collaboration", "Source Code", "Git"],
      },
      {
        name: "React",
        level: "Basic",
        keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "React-Native",
        level: "Basic",
        keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "Astro",
        level: "Basic",
        keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "C#",
        level: "Intermediate",
        keywords: ["Web Development", "Frontend", "Backend"],
      },
      {
        name: "ASP.NET",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "DevOps",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Figma",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "SCRUM",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Bootstrap",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Expo",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Python",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "Razor",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
      {
        name: "DreamViewer",
        level: "Intermediate",
        keywords: ["Web Development", "Backend"],
      },
    ],
    languages: [
      {
        language: "Spanish",
        fluency: "Native speaker",
      },
      {
        language: "English",
        fluency: "Advanced",
      },
    ],
    interests: [
      {
        name: "Wildlife",
        keywords: ["Ferrets", "Unicorns"],
      },
    ],
    references: [
      {
        name: "Jane Doe",
        reference: "Reference…",
      },
    ],
    projects: [
      {
        name: "OMSAPP",
        isActive: false,
        description:
          "Bus route management system, buses, stops, and real-time bus arrival estimation.",
        highlights: [
          "React",
          "React-Native",
          "Microsoft SQL Server",
          "SignalR",
        ],
        url: "#",
      },
    ],
  },
} as const;
