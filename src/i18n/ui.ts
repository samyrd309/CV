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
    sobreMiTitle: "Sobre Mi",
    experienciaTitle: "Experiencia laboral",
    educacionTitle: "Educación",
    habilidadesTitle: "Habilidades",
    proyectosTitle: "Proyectos",
    expirienceTimeNow: "Actualidad",
    responsibilities: "Responsabilidades",
    objetivosLogrados: "Objetivos Logrados",
    basics: {
      name: "Samuel Junior Charles Saint-Jean",
      label: "Ingeniero de software - Desarrollador Web - Desarrollador Móvil",
      image: "",
      email: "samuelcharlessj30@gmail.com",
      phone: "+1 829 906 1039",
      url: "",
      summary:
        "Con casi un año como desarrollador freelancer en Banreservas. Apasionado por la tecnología y la creatividad, estoy siempre en busca de desafíos que me permitan destacar y evolucionar profesionalmente. Graduado del Instituto Tecnológico de Santo Domingo (INTEC).",
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
        name: "Banreservas",
        position: "Desarrollador Externo Junior",
        url: "",
        startDate: "Agosto 2023",
        endDate: null,
        summary: {
          responsabilities: [
            "Contribuir al desarrollo de APIs RESTful integrando bases de datos SQL Server y servicios externos.",
            "Realizar tareas de mantenimiento, seguimiento, control y documentación de los sistemas informáticos de Banreservas para garantizar su funcionamiento sin problemas.",
            "Aprender y adoptar activamente las tecnologías y herramientas definidas por el equipo.",
            "Participar en el diseño e implementación de nuevas características, bajo la supervisión y dirección del equipo.",
          ],
          achievements: [
            "Contribuí activamente en la automatización del proceso de carga de datos, migrando de Integration Services manual a un Background Worker Service, mejorando significativamente la eficiencia operativa.",
            "Aprendí y apliqué nuevas tecnologías y herramientas, demostrando capacidad para aprender de manera autónoma y adaptarme a los requerimientos del equipo.",
            "Participé en la implementación de actualizaciones de parámetros para asegurar el cumplimiento normativo y optimizar las operaciones internas de Banreservas.",
          ],
        },
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
        institution: "Instituto Tecnológico de Santo Domingo (INTEC)",
        url: "https://www.intec.edu.do",
        area: "Ingeniero de Software",
        studyType: "Bachelor",
        startDate: "2021-01-01",
        endDate: "2024-01-01",
        score: "4.0",
        courses: ["DB1101 - Basic SQL"],
      }
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
        name: "Metodologia ágile SCRUM",
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
    responsibilities: "Responsibilities",
    objetivosLogrados: "Achieved Objectives",
    basics: {
      name: "Samuel Junior M. Charles Saint-Jean",
      label: "Software Engineer",
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
        summary: {
          responsabilities: [
            "Contribute to the development of RESTful APIs integrating SQL Server databases and external services.",
            "Perform maintenance, monitoring, control, and documentation tasks of Banreservas' IT systems to ensure smooth operation.",
            "Actively learn and adopt the technologies and tools defined by the team.",
            "Participate in the design and implementation of new features under the supervision and direction of the team.",
          ],
          achievements: [
            "Actively contributed to automating the data loading process, migrating from manual Integration Services to a Background Worker Service, significantly improving operational efficiency.",
            "Learned and applied new technologies and tools, demonstrating the ability to learn autonomously and adapt to team requirements.",
            "Participated in implementing parameter updates to ensure regulatory compliance and optimize Banreservas' internal operations.",
          ],
        },
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
        institution: "Instituto Tecnológico de Santo Domingo (INTEC)",
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
        name: "Agile SCRUM methodology",
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
