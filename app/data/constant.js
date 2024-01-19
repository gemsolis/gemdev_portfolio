import { TbStackFront } from "react-icons/tb";
import { RiUser5Fill, RiContactsBook2Line, RiHomeLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithubAlt,
  FaBehance,
} from "react-icons/fa";

export const menuItems = [
  { title: "Home", url: "#home", icon: <RiHomeLine /> },
  { title: "About", url: "#about", icon: <RiUser5Fill /> },
  { title: "Tech", url: "#technologies", icon: <TbStackFront /> },
  { title: "Works", url: "#works", icon: <FaRegLightbulb /> },
  { title: "Contacts", url: "#contacts", icon: <RiContactsBook2Line /> },
];

export const socialLinks = [
  {
    title: "Linked In",
    url: "https://www.linkedin.com/in/abigaelgem",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    title: "Github",
    url: "https://github.com/gemsolis",
    icon: <FaGithubAlt size={20} />,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/gemsolis.dev",
    icon: <FaInstagram size={20} />,
  },
  {
    title: "Behance",
    url: "https://www.behance.net/gemsolis",
    icon: <FaBehance size={20} />,
  },
];

export const techIcons = {
  frontend: {
    html: {
      logo: "/assets/logo/html.png",
      text: "HTML",
    },
    css: {
      logo: "/assets/logo/css.png",
      text: "CSS",
    },
    javascript: {
      logo: "/assets/logo/javascript.png",
      text: "JavaScript",
    },
    nextjs: {
      logo: "/assets/logo/nextjs.webp",
      text: "NextJS",
    },
    react: {
      logo: "/assets/logo/react.png",
      text: "React",
    },
    sass: {
      logo: "/assets/logo/sass.png",
      text: "Sass",
    },
    less: {
      logo: "/assets/logo/less.png",
      text: "Less",
    },
    tailwind: {
      logo: "/assets/logo/tailwindcss.png",
      text: "Tailwind CSS",
    },
    bootstrap: {
      logo: "/assets/logo/bootstrap.png",
      text: "Bootstrap",
    },
  },
  backend: {
    php: {
      logo: "/assets/logo/php.png",
      text: "PHP",
    },
    mysql: {
      logo: "/assets/logo/mysql.png",
      text: "MySql",
    },
    node: {
      logo: "/assets/logo/node.png",
      text: "NodeJS",
    },
    express: {
      logo: "/assets/logo/expressjs.png",
      text: "ExpressJS",
    },
    mongodb: {
      logo: "/assets/logo/mongodb.png",
      text: "MongoDB",
    },
  },
  tools: {
    redux: {
      logo: "/assets/logo/redux.png",
      text: "Redux",
    },
    firebase: {
      logo: "/assets/logo/firebase.png",
      text: "Firebase",
    },
    jquery: {
      logo: "/assets/logo/jquery.png",
      text: "jQuery",
    },
    github: {
      logo: "/assets/logo/github.png",
      text: "GitHub",
    },
    git: {
      logo: "/assets/logo/git.png",
      text: "Git",
    },
    docker: {
      logo: "/assets/logo/docker.png",
      text: "Docker",
    },
    framermotion: {
      logo: "/assets/logo/framer-motion.svg",
      text: "Framer Motion",
    },
    wordpress: {
      logo: "/assets/logo/wordpress.png",
      text: "Wordpress",
    },
  },
  design: {
    adobexd: {
      logo: "/assets/logo/xd.png",
      text: "Adobe XD",
    },
    figma: {
      logo: "/assets/logo/figma.png",
      text: "Figma",
    },
    photoshop: {
      logo: "/assets/logo/photoshop.png",
      text: "Photoshop",
    },
    canva: {
      logo: "/assets/logo/canva.png",
      text: "Canva",
    },
  },
};

export const projects = [
  {
    title: "Admin Dashboard using NextJS",
    image: "/assets/work_admin.png",
    github: "https://github.com/gemsolis/admin-dashboard-nextjs",
    site: "https://admin-dashboard-nextjs-swrx.vercel.app",
    tech: ["NextJS", "TailwindCSS", "MongoDB", "AuthJS"],
    description:
      "Created an Admin Dashboard using NextJS, Tailwind CSS, and MongoDB with server actions for authentication. The application supports CRUD operations for product management, ensuring secure access and functionality based on user roles.",
  },
  {
    title: "Car Showcase Landing Page",
    image: "/assets/work_carhub.png",
    github: "https://github.com/gemsolis/carsShowcase_nextjs",
    site: "https://cars-showcase-nextjs-72as.vercel.app/",
    tech: ["NextJS", "TailwindCSS", "Rest API"],
    description:
      "This landing page introduces a curated car selection, offering an interactive experience. It combines NextJS for structure, Rapid API for real-time data, and TailwindCSS for modern, responsive design.",
  },
  {
    title: "CRUD Product Management",
    image: "/assets/work_crud.png",
    github: "https://github.com/gemsolis/crud-admin-app",
    site: "https://crud-product-app.web.app/",
    tech: ["React", "TailwindCSS", "Styled Components"],
    description:
      "This web app employs ReactJS and Firebase/Firestore for database and hosting. Users can perform CRUD operations on products, sorting and searching by name or description. It features form validation for specific fields, and utilizes Redux Toolkit and Styled-Components for development.",
  },
  {
    title: "LinkedIn Clone with Authentication",
    image: "/assets/work_linkedin.png",
    github: "https://github.com/gemsolis/LinkedIn-Clone.git",
    site: "https://linkedin-clone-96766.web.app/home",
    tech: ["React", "Styled Components", "Firebase"],
    description:
      "LinkedIn-style React app using Firebase for post storage and user authentication. Users can create, edit, and delete posts, with image and video uploads.",
  },
  {
    title: "Cart Page using Redux",
    image: "/assets/work_redux.png",
    github: "https://github.com/gemsolis/redux-shop-project.git",
    tech: ["React", "Rest API", "Styled Components", "Redux"],
    site: "https://redux-shopcart.web.app/",
    description:
      "Redux Toolkit-powered shopping cart web app using AsyncThunk for API integration. Features include item management, quantity adjustment, and cart clearing. Deployed on Firebase, built with ReactJS.",
  },
  {
    title: "Netflix Clone using TMDB API",
    image: "/assets/work_netflix.png",
    github: "https://github.com/gemsolis/Netflix-Clone-React-Project.git",
    tech: ["React", "Rest API", "Styled Components"],
    site: "https://netflix-clone-react-project.web.app",
    description:
      "Desktop version clone of the popular streaming service online using React.js, Sass, TMDB Api and Firebase. This project showcase how I familiarize using API from a third-party database.",
  },
  {
    title: "Responsive Restaurant Website",
    image: "/assets/work_resto.png",
    github: "https://github.com/gemsolis/Restaurant-Website-ReactJS.git",
    tech: ["React", "Rest API", "Styled Components"],
    site: "https://restaurant-website-reactjs.web.app",
    description:
      "In this project, I created a mobile-friendly restaurant website using ReactJS and styled-components. The website is optimized for mobile devices, ensuring a great user experience for visitors accessing the site on their smartphones or tablets.",
  },
];
