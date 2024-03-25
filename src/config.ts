import kate from "../src/assets/kate.png";

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
    github: "https://github.com/JohnDoe",
    linkedin: "https://www.linkedin.com/in/katherine-delgado-1132491a8/",
  },
  projects: {
    "996.ICU": {
      url: "https://github.com/996icu/996.ICU",
      tags: ["ccp", "chinese", "overwork", "labor", "996"],
    },
    Linux: {
      url: "https://github.com/torvalds/linux",
      tags: ["c", "kernel", "unix", "os"],
    },
  },
  og: {
    image: kate.src,
  },
};
