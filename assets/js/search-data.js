// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-meet-me-at-the-mpsa-2025-i-will-present-a-poster-about-my-current-project-with-shiro-kuriwaki-on-ticket-splitting",
          title: 'Meet me at the MPSA 2025! I will present a poster about my...',
          description: "",
          section: "News",},{id: "news-i-just-accepted-my-phd-position-at-the-university-of-california-san-diego-startig-in-the-fall-2025",
          title: 'I just accepted my PhD position at the University of California San Diego...',
          description: "",
          section: "News",},{id: "news-bye-yale-i-ll-look-back-on-a-great-year-full-of-exciting-projects-with-my-two-supervisors-josh-kalla-and-shiro-kuriwaki-and-wonderful-connections-that-i-hope-will-last",
          title: 'Bye Yale! I’ll look back on a great year full of exciting projects...',
          description: "",
          section: "News",},{id: "news-and-hello-san-diego-i-am-very-excited-to-begin-my-phd-studies-today-at-the-university-of-california-san-diego",
          title: 'And hello San Diego! I am very excited to begin my PhD studies...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-be-supporting-amna-salam-this-quarter-as-a-teaching-assistant-for-the-course-politics-of-legal-institutions",
          title: 'I am excited to be supporting Amna Salam this quarter as a Teaching...',
          description: "",
          section: "News",},{id: "news-check-out-my-new-autograder-package-robjgrader-an-r-package-for-automated-grading-of-r-submissions-in-political-science-methods-courses",
          title: 'Check out my new autograder package robjgrader — an R package for automated...',
          description: "",
          section: "News",},{id: "projects-the-effect-of-media-salience-on-parliamentary-speech-behavior",
          title: 'The Effect of Media Salience on Parliamentary Speech Behavior',
          description: "Master Thesis at the University of Konstanz",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "teachings-poli104v-politics-of-legal-institutions",
          title: 'POLI104V: Politics of Legal Institutions',
          description: "Teaching Assistant for Professor Amna Salam Winter Quarter 2026",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/1_Politics-of-legal-institutions.html";
            },},{id: "teachings-short-introduction-to-r-tidyverse-crash-course",
          title: 'Short Introduction to R (Tidyverse) — Crash Course',
          description: "A three-part introductory course to R and the tidyverse, covering data management, visualization, and statistical analysis.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2_R-Intro.html";
            },},{id: "teachings-robjgrader",
          title: 'robjgrader',
          description: "An R package for automated grading of R submissions in political science methods courses.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/3_robjgrader.html";
            },},{id: "teachings-poli100x-data-analysis-amp-u-s-politics",
          title: 'POLI100X: # Data Analysis &amp;amp; U.S. Politics',
          description: "Teaching Assistant for Professor Pamela Ban Spring Quarter 2026",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/4_Data-Analysis-and-US-Politics.html";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/niklashaehn.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%68%61%65%68%6E@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/NiklasHaehn", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/niklas-haehn-244737207", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/niklas_haehn", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
