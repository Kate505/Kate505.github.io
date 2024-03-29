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

const socialImages = {
  github: githubImg,
  ruby: rubyImg,
  rails: railsImg,
  java: javaImg,
  javascript: javascriptImg,
  c: cImg,
  cpp: cppImg,
  react: reactImg,
  typescript: typescriptImg,
  git: gitImg,
  android: androidImg,
  astro: astroImg,
  postgresql: postgresqlImg,
  node: nodeImg,
  next: nextImg,
  mysql: mysqlImg,
  sqlServer: sqlServerImg,
  bootstrap: bootstrapImg,
  html: htmlImg,
  handlebars: handlebarsImg,
  jquery: jqueryImg,
  express: expressImg,
  rspec: rspecImg,
  vite: viteImg
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
    started: "2022-05-19",
    stack: "Ruby, Ruby on Rails and React JS",
    hobby: "play musical instruments like the Violin and Piano",
    projectLink: "https://github.com/Kate505",
  },
  socials: {
    twitter: "https://twitter.com/home",
    github: "https://github.com/Kate505",
    linkedin: "https://www.linkedin.com/in/katherine-delgado-1132491a8/",
  },
  tools: {
    git: "https://git-scm.com",
    github: "https://docs.github.com",
    html: "",
    bootstrap: "https://getbootstrap.com/",
    jquery: "https://jquery.com/",
    typescript: "https://www.typescriptlang.org/",
    javascript: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    node: "https://nodejs.org",
    express: "https://expressjs.com/",
    next: "https://nextjs.org/",
    react: "https://react.dev/learn",
    vite: "https://vitejs.dev/",
    astro: "https://astro.build/",
    handlebars: "https://handlebarsjs.com/",
    ruby: "https://www.ruby-lang.org",
    rails: "https://rubyonrails.org",
    rspec: "https://rspec.info/",
    java: "https://www.java.com",
    android: "https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjwqpSwBhClARIsADlZ_TkLeizKsu0XhYBH1xJtK12qYjXy3i6kM0bE2BEBXH-95jgd0abVHuwaAkPeEALw_wcB&gclsrc=aw.ds&hl=es-419",
    c: "https://devdocs.io/c/",
    cpp: "https://devdocs.io/cpp/",
    postgresql: "https://www.postgresql.org/",
    mysql: "https://www.mysql.com/",
    sqlServer: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
  },
  projects: {
    "Calculator ReactJs": {
      url: "https://github.com/Kate505/Calculator-React",
      preview: "https://kate505.me/Calculator-React/",
      tags: ["JSX", "ReactJs", "Vite"],
    },
    "Bookstore Management System": {
      url: "https://github.com/Kate505/Libreria_Bootstrap",
      preview: "https://kate505.me/Libreria_Bootstrap/",
      tags: ["JavaScript", "CSS", "HTML-5"],
    },
    "Shortest route. Floyd's algorithm": {
      url: "https://github.com/Kate505/Kate505-Ruta_mas_corta_Floyd_Mapa_Nicaragua",
      preview: "",
      tags: ["C"],
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
    "2022 - Now": {
      occupation: "Junior Software Developer",
      languages: ["Ruby", "Ruby on Rails", "RSpec", "JavaScript", "React JS", "Next JS", "Bootstrap"],
      details: [
        "Learning and developing software skills",
        "Take charge of small projects such as developing control panels and migrating to new web technologies",
        "Developing new functionalities such as new screens in the project",
        "Fixing Bugs on the main project",
        "I started as an intern learning about workflow and good practices when programming"
      ]
    },
    "2020 - 2022": {
      occupation: "Technology Enthusiast and Computer Engineering Student",
      languages: ["C", "C++", "HTML", "CSS", "JavaScript", "Visual Basic .Net", "Arduino"],
      details: [
        "I learned about web development, frameworks and new technologies",
        "Computer Engineering Student at UNI-Nicaragua",
        "I learned about programming principles and logic"
      ]
    }
  }
};
