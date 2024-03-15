export const languages = {
  en: "English",
  es: "Español",
};

export function getOtherLanguage(currentLanguage: 'en' | 'es'): 'en' | 'es' {
  return currentLanguage === 'en' ? 'es' : 'en';
}


export const defaultLang = "es";

export const ui = {
  es: {
    sobreMiTitle: "Sobre Mi",
    experienciaTitle: "Experiencia laboral",
    educacionTitle: "Educación",
    habilidadesTitle: "Habilidades",
    proyectosTitle: "Proyectos",
    expirienceTimeNow: "Actualidad",
    basics: {
      name: "Samuel Junior M. Charles Saint-Jean",
      label:
        "Ingeniero de software con experiencia en desarrollo web, desarrollo de aplicaciones moviles y desarrollo de aplicaciones de escritorio.",
      image: "",
      email: "samuelcharlessj30@gmail.com",
      phone: "+1 829 906 1039",
      url: "",
      summary:
        "Aproximadamente 1 año de experiencia como Desarrollador Web. Egresado del Instituto Tecnológico de Santo Domingo (INTEC). Actualmente estoy trabajando como desarrollador freelancer en el Banreservas. Busco nuevas oportunidades para seguir creciendo profesionalmente.",
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
        name: "Metaconxept",
        position: "Desarrollador Externo Junior",
        url: "",
        startDate: "Agosto 2023",
        endDate: null,
        summary:
          "Desarrollo de APIs RESTful escalables integrando bases de datos SQL Server y servicios externos para la empresa (Banreservas) sub-contratado por Metaconxept. Mantenimiento, seguimiento y control de los sistemas informaticos de la empresa (Banreservas).",
        highlights: [""],
      },
      {
        name: "Qudif",
        position: "Desarrollador Backend Junior",
        url: "",
        startDate: "Agosto 2022",
        endDate: "Julio 2023",
        summary:
          "Implementación y personalización de módulos de facturación en el sistema ERP. Análisis y documentación de requerimientos para la adecuación de la logíca de facturación de la empresa. Responsable de identificar requerimientos del usuario y diseñar los servicios de facturación.",
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
        institution: "CodeCademy",
        url: "https://www.intec.edu.do",
        area: "Certificado de Desarrollador Front-End",
        studyType: "Bachelor",
        startDate: "2023-12-01",
        endDate: null,
        score: "4.0",
        courses: ["DB1101 - Basic SQL"],
      },
      {
        institution: "INTEC",
        url: "https://www.intec.edu.do",
        area: "Ingeniero de Software",
        studyType: "Bachelor",
        startDate: "2021-01-01",
        endDate: "2024-01-01",
        score: "4.0",
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
        keywords: ["Desarrollo Web", "Frontend"],
      },
      {
        name: "CSS",
        level: "Master",
        keywords: ["Desarrollo Web", "Frontend", "Diseño Responsive"],
      },
      {
        name: "JavaScript",
        level: "Intermedio",
        keywords: ["Desarrollo Web", "Frontend", "Backend", "Fullstack"],
      },
      {
        name: "TypeScript",
        level: "Básico",
        keywords: [
          "Desarrollo Web",
          "Frontend",
          "Backend",
          "JavaScript Superset",
        ],
      },
      {
        name: "Node",
        level: "Básico",
        keywords: ["Desarrollo Web", "Backend", "JavaScript", "Servidor"],
      },
      {
        name: "Microsoft SQL",
        level: "Intermedio",
        keywords: [
          "Bases de Datos",
          "SQL",
          "Almacenamiento de Datos",
          "Backend",
        ],
      },
      {
        name: "Git",
        level: "Avanzado",
        keywords: ["Control de Versiones", "Colaboración", "Código Fuente"],
      },
      {
        name: "GitHub",
        level: "Avanzado",
        keywords: [
          "Control de Versiones",
          "Colaboración",
          "Código Fuente",
          "Git",
        ],
      },
      {
        name: "React",
        level: "Básico",
        keywords: ["Desarrollo Web", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "React-Native",
        level: "Básico",
        keywords: ["Desarrollo Web", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "Astro",
        level: "Básico",
        keywords: ["Desarrollo Web", "Frontend", "JavaScript Library", "UI"],
      },
      {
        name: "C#",
        level: "Intermedio",
        keywords: ["Desarrollo Web", "Frontend", "Backend"],
      },
      {
        name: "ASP.NET",
        level: "Intermedio",
        keywords: ["Desarrollo Web", "Backend"],
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
      {
        name: "INTECNOLGIA",
        isActive: false,
        description:
          "Aplicación de celular que escanea códigos QR de los puestos de exibición y se brinda un premio al conseguir todos los códigos.",
        highlights: ["Microsoft SQL Server", "ASP.NET Web API", "React-Native"],
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
    expirienceTimeNow: "Now",
    basics: {
      name: "Samuel Junior M. Charles Saint-Jean",
      label:
        "Software Engineer with experience in web development, mobile app development, and desktop application development.",
      image: "",
      email: "samuelcharlessj30@gmail.com",
      phone: "+1 829 906 1039",
      url: "",
      summary:
        "Approximately 1 year of experience as a Web Developer. Graduated from the Instituto Tecnológico de Santo Domingo (INTEC). Currently working as a freelancer developer at Banreservas. Seeking new opportunities to continue growing professionally.",
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
        name: "Metaconxept",
        position: "Junior External Developer",
        url: "",
        startDate: "August 2023",
        endDate: null,
        summary:
          "Development of scalable RESTful APIs integrating SQL Server databases and external services for the company (Banreservas) subcontracted by Metaconxept. Maintenance, monitoring, and control of the company's (Banreservas) information systems.",
        highlights: [""],
      },
      {
        name: "Qudif",
        position: "Junior Backend Developer",
        url: "",
        startDate: "August 2022",
        endDate: "July 2023",
        summary:
          "Implementation and customization of billing modules in the ERP system. Analysis and documentation of requirements for the adaptation of the company's billing logic. Responsible for identifying user requirements and designing billing services.",
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
        institution: "CodeCademy",
        url: "https://www.intec.edu.do",
        area: "Front-End Developer Certificate",
        studyType: "Bachelor",
        startDate: "2023-12-01",
        endDate: null,
        score: "4.0",
        courses: ["DB1101 - Basic SQL"],
      },
      {
        institution: "INTEC",
        url: "https://www.intec.edu.do",
        area: "Software Engineer",
        studyType: "Bachelor",
        startDate: "2021-01-01",
        endDate: "2024-01-01",
        score: "4.0",
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
        name: "Node",
        level: "Basic",
        keywords: ["Web Development", "Backend", "JavaScript", "Server"],
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
      {
        name: "INTECNOLGIA",
        isActive: false,
        description:
          "Mobile application that scans QR codes from exhibition booths and rewards are provided upon obtaining all codes.",
        highlights: ["Microsoft SQL Server", "ASP.NET Web API", "React-Native"],
        url: "#",
      },
    ],
  },
} as const;
