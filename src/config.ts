import kate from "../src/assets/icon.png";

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
}

export const Config: IConfig = {
  me: {
    name: "Katherine Delgado",
    job: "fullstack developer",
    started: "2022-05-19",
    stack: "Ruby, Ruby on Rails and React js",
    hobby: "play musical instruments like the Violin and Piano",
    projectLink: "https://github.com/Kate505",
  },
  socials: {
    twitter: "https://twitter.com/home",
    github: "https://github.com/Kate505",
    linkedin: "https://www.linkedin.com/in/katherine-delgado-1132491a8/",
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
};
