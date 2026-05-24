import kate from "../src/assets/icon.png";
import githubImg from "./assets/tools/github.png";
import rubyImg from "./assets/tools/ruby.png";
import railsImg from "./assets/tools/rails.png";
import javaImg from "./assets/tools/java.png";
import javascriptImg from "./assets/tools/javascript.png";
import cImg from "./assets/tools/c.png";
import cppImg from "./assets/tools/cpp.png";
import reactImg from "./assets/tools/react.png";
import typescriptImg from "./assets/tools/typescript.png";
import gitImg from "./assets/tools/git.png";
import androidImg from "./assets/tools/android.png";
import astroImg from "./assets/tools/astro.png";
import postgresqlImg from "./assets/tools/postgresql.png";
import nodeImg from "./assets/tools/node.png";
import nextImg from "./assets/tools/next.png";
import mysqlImg from "./assets/tools/mysql.png";
import sqlServerImg from "./assets/tools/sqlServer.png";
import bootstrapImg from "./assets/tools/bootstrap.png";
import htmlImg from "./assets/tools/html.png";
import handlebarsImg from "./assets/tools/handlebars.png";
import jqueryImg from "./assets/tools/jquery.png";
import expressImg from "./assets/tools/express.png";
import rspecImg from "./assets/tools/rspec.png";
import viteImg from "./assets/tools/vite.png";
import cypressImg from "./assets/tools/cypress.png";
import gitlabImg from "./assets/tools/gitlab.png";
import sentryImg from "./assets/tools/sentry.png";
import authentikImg from "./assets/tools/authentik.png";
import keycloakImg from "./assets/tools/keycloak.png";
import minioImg from "./assets/tools/minio.png";
import jasperImg from "./assets/tools/jaspersoft.png";
import tailwindImg from "./assets/tools/tailwind.png";
import materialImg from "./assets/tools/material.png";
import dockerImg from "./assets/tools/docker.png";
import turboImg from "./assets/tools/turbo.png";

const socialImages = {
  ruby: rubyImg,
  rails: railsImg,
  turbo: turboImg,
  rspec: rspecImg,
  node: nodeImg,
  react: reactImg,
  vite: viteImg,
  next: nextImg,
  cypress: cypressImg,
  astro: astroImg,
  javascript: javascriptImg,
  jquery: jqueryImg,
  typescript: typescriptImg,
  express: expressImg,
  c: cImg,
  gitlabcicd: gitlabImg,
  github: githubImg,
  sentry: sentryImg,
  authentik: authentikImg,
  keycloak: keycloakImg,
  minio: minioImg,
  jaspersoft: jasperImg,
  cpp: cppImg,
  java: javaImg,
  postgresql: postgresqlImg,
  mysql: mysqlImg,
  docker: dockerImg,
  sqlServer: sqlServerImg,
  git: gitImg,
  html: htmlImg,
  bootstrap: bootstrapImg,
  handlebars: handlebarsImg,
  tailwind: tailwindImg,
  material: materialImg,
  android: androidImg,
};

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  cv: {
    en: string;
    es: string;
  };
  tools: {
    [name in keyof typeof socialImages]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      preview: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
  exp: {
    [range_date: string]: {
      occupation: string;
      languages: string[],
      details: string[];
    }
  };
}

export const Config: IConfig = {
  me: {
    name: "Katherine Delgado",
    job: "fullstack developer",
    started: "2023-05-19",
    stack: "Ruby, Ruby on Rails, and NextJs",
    hobby: "play musical instruments like the Violin and Piano",
    projectLink: "https://github.com/Kate505",
  },
  socials: {
    twitter: "https://twitter.com/KateS505",
    github: "https://github.com/Kate505",
    linkedin: "https://www.linkedin.com/in/katherine-delgado-1132491a8/",
    gmail: "mailto:katherinesofiadl@gmail.com",
  },
  cv: {
    en: "/docs/CV_Katherine_Delgado_en.pdf",
    es: "/docs/Cv_Katherine_Delgado_es.pdf",
  },
  tools: {
    ruby: "https://www.ruby-lang.org",
    rails: "https://rubyonrails.org",
    turbo: "https://turbo.hotwired.dev/",
    rspec: "https://rspec.info/",
    node: "https://nodejs.org",
    react: "https://react.dev/learn",
    vite: "https://vitejs.dev/",
    next: "https://nextjs.org/",
    cypress: "https://www.cypress.io/",
    astro: "https://astro.build/",
    javascript: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    jquery: "https://jquery.com/",
    typescript: "https://www.typescriptlang.org/",
    express: "https://expressjs.com/",
    c: "https://devdocs.io/c/",
    gitlabcicd: "https://about.gitlab.com/solutions/continuous-integration/",
    github: "https://docs.github.com",
    sentry: "https://sentry.io/",
    authentik: "https://goauthentik.io/",
    keycloak: "https://www.keycloak.org/",
    minio: "https://www.min.io/",
    jaspersoft: "https://www.jaspersoft.com/",
    cpp: "https://devdocs.io/cpp/",
    java: "https://www.java.com",
    postgresql: "https://www.postgresql.org/",
    mysql: "https://www.mysql.com/",
    docker: "https://www.docker.com/",
    sqlServer: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
    git: "https://git-scm.com",
    html: "",
    bootstrap: "https://getbootstrap.com/",
    handlebars: "https://handlebarsjs.com/",
    tailwind: "https://tailwindcss.com/",
    material: "https://mui.com/material-ui/",
    android: "https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjwqpSwBhClARIsADlZ_TkLeizKsu0XhYBH1xJtK12qYjXy3i6kM0bE2BEBXH-95jgd0abVHuwaAkPeEALw_wcB&gclsrc=aw.ds&hl=es-419",
  },
  projects: {
    "Bookstore Management System": {
      url: "https://github.com/Kate505/sistema_libreria",
      preview: "https://github.com/Kate505/sistema_libreria",
      tags: ["Ruby", "Ruby on Rails", "Tailwind", "DaisyUI", "PostgreSQL", "Docker", "CI/CD"],
    },
    "Qwen3 TTS": {
      url: "https://github.com/Kate505/tts-dashboard",
      preview: "https://github.com/Kate505/tts-dashboard",
      tags: ["Python", "Qwen 3 TTS", "NextJS", "IA"],
    },
    "Shortest route. Floyd's algorithm": {
      url: "https://github.com/Kate505/Kate505-Ruta_mas_corta_Floyd_Mapa_Nicaragua",
      preview: "",
      tags: ["C"],
    },
    "Calculator ReactJs": {
      url: "https://github.com/Kate505/Calculator-React",
      preview: "https://kate505.github.io/Calculator-React/",
      tags: ["JSX", "ReactJs", "Vite"],
    },
    "Bookstore Management System .Net": {
      url: "https://github.com/Kate505/Menu_BD_Studio_NET",
      preview: "",
      tags: ["Visual Basic .Net"],
    },
  },
  og: {
    image: kate.src,
  },
  exp: {
    "2026 - Now": {
      occupation: "JavaScript Team Technical Lead",
      languages: ["JavaScript", "TypeScript", "React.js", "Next.js", "Cypress", "Docker", "GitLab CI/CD"],
      details: [
        "Leading the development team in executing frontend and full-stack projects using Next.js and React.",
        "Establishing rigorous QA and Code Review processes to guarantee Clean Code standards and optimal performance.",
        "Designing and maintaining GitLab CI/CD pipelines, automating linting, building, and E2E testing with Cypress.",
        "Creating and optimizing Dockerfiles to generate lightweight, secure, and scalable production images."
      ]
    },
    "2023 - 2025": {
      occupation: "Ruby on Rails Full Stack Software Developer",
      languages: ["Ruby", "Ruby on Rails", "PostgreSQL", "React.js", "Next.js", "RSpec", "JasperReports"],
      details: [
        "Developed and maintained the Fleming Hospital Management System, a critical system used nationwide.",
        "Implemented backend features and optimized complex SQL queries in PostgreSQL, significantly improving system performance.",
        "Created real-time frontend dashboards using Ruby on Rails, React, and Next.js.",
        "Refactored legacy code by applying MVC design patterns and development best practices.",
        "Generated analytical and operational reports using JasperReports/Jaspersoft."
      ]
    },
    "2019 - 2024": {
      occupation: "Computer Engineering Student (Graduate)",
      languages: ["Java", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SQL"],
      details: [
        "Graduated with a Bachelor's Degree in Computer Engineering from Universidad Nacional de Ingeniería (UNI).",
        "Acquired a solid foundation in programming logic, MVC architecture, RESTful APIs, and design patterns.",
        "Developed academic and foundational projects focusing on modern web development and relational databases."
      ]
    }
  }
};
