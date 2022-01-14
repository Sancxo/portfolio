// icon imports
import htmlIcon from "../Imgs/icons/html.png";
import cssIcon from "../Imgs/icons/css.png";
import boostrapIcon from "../Imgs/icons/bootstrap.png";
import jsIcon from "../Imgs/icons/js.png";
import tsIcon from "../Imgs/icons/typescript.png";
import reactIcon from "../Imgs/icons/react.png";
import angularIcon from "../Imgs/icons/angular.png";
import threejsIcon from "../Imgs/icons/threejs.png";
import pwaIcon from "../Imgs/icons/pwa.png";
import nodeIcon from "../Imgs/icons/node.png";
import elixirIcon from "../Imgs/icons/elixir.png";
import phoenixIcon from "../Imgs/icons/phoenix.png";
import phpIcon from "../Imgs/icons/php.png";
import wpIcon from "../Imgs/icons/wordpress.png";
import elementorIcon from "../Imgs/icons/elementor.png";
import graphqlIcon from "../Imgs/icons/graphql.png";
import postgresIcon from "../Imgs/icons/postgres.png";
import mysqlIcon from "../Imgs/icons/mysql.png";

// screenshot imports
import portfolio from "../Imgs/project-screenshots/portfolio.png";
import lmj from "../Imgs/project-screenshots/lmj.png";
import wio from "../Imgs/project-screenshots/wio.png";
import septLieues from "../Imgs/project-screenshots/7lieues.png";
import chaletsCaviar from "../Imgs/project-screenshots/chalets-caviar.png";
import getGifs from "../Imgs/project-screenshots/get-gifs.png";
import snake from "../Imgs/project-screenshots/snake.png";
import pokeyBall from "../Imgs/project-screenshots/pokey-ball.png";
import neonClock from "../Imgs/project-screenshots/neon-clock.png";
import forestView from "../Imgs/project-screenshots/forest-view.png";
import rotatingCube from "../Imgs/project-screenshots/rotating-cube.png";
import supplierNotation from "../Imgs/project-screenshots/supplier-notation.png";
import iKebab from "../Imgs/project-screenshots/ikebab.png";
import greta from "../Imgs/project-screenshots/greta.png";
import renault from "../Imgs/project-screenshots/renault.png";

const projectList: {
    id: string,
    name: string,
    url: string,
    cover: string,
    category: string,
    desc: string,
    technos: string[]
    }[] = [
    {
        id: "portfolio",
        name: "Portfolio",
        url: "https://sancxo.github.io/",
        cover: portfolio,
        category: "Perso",
        desc: "This portfolio.",
        technos: ["TypeScript", "React", "PHP"]
    },
    {
        id: "lmj",
        name: "La Maison Jungle",
        url: "https://sancxo.github.io/la-maison-jungle",
        cover: lmj,
        category: "Perso",
        desc: 'Dynamic front-end e-commerce web page made in React for a course on OpenClassrooms.', // Features: dynamic cart (open/close, add items), automatic item catalog with parameters from model, light/dark mode switch written in localStorage, type filter.
        technos: ["JavaScript", "React"]
    },    
    {
        id: "wio",
        name: "Watch It Outside",
        url: "https://sancxo.github.io/watch-it-outside",
        cover: wio,
        category: "Perso",
        desc: "Responsive website for a fictional film festival in Boston made as an exam for my full-stack training class at OpenClassrooms.",
        technos: ["HTML", "CSS", "Bootstrap", "JavaScript"]
    },
    {
        id: "chalets-caviar",
        name: "Chalets & Caviar",
        url: "http://itlolcu.cluster031.hosting.ovh.net/chalets-caviar",
        cover: chaletsCaviar,
        category: "Perso",
        desc: "WordPress website for a fictional real estate agency in Aspen made as an exam for my full-stack training class at OpenClassrooms.",
        technos: ["WordPress", "Elementor"]
    },
    {
        id: "snake",
        name: "Snake",
        url: "https://sancxo.github.io/snake",
        cover: snake,
        category: "Perso",
        desc: "Personal project made during summer holiday to stay in shape with vanilla JavaScript and canvas. Fully playable on computers and mobiles, also downloadable on device as a Progressive Web App.",
        technos: ["HTML", "CSS", "JavaScript", "PWA"]
    },
    {
        id: "7lieues",
        name: "7 Lieues",
        url: "https://7lieues.io",
        cover: septLieues,
        category: "Pro",
        desc: "WordPress website made as a freelance mission for 7 Lieues Technologies, which is now my actual employer.",
        technos: ["WordPress", "Elementor"]
    },
    {
        id: "get-gifs",
        name: "Get Gifs",
        url: "http://itlolcu.cluster031.hosting.ovh.net/get-gifs",
        cover: getGifs,
        category: "Pro",
        desc: "Technical test for a former employer where I should make a React app which connect to Giphy API to display the platform's Top20 gifs with several features.",
        technos: ["JavaScript", "React", "Bootstrap"]
    },
    {
        id: "supplier-notation",
        name: "Supplier Notation",
        url: "",
        cover: supplierNotation,
        category: "Pro",
        desc: "Full-stack data visualisation feature made during a work-placement at 7 Lieues Technologies, containing a form to evaluate a supplier, then the app render data through charts.",
        technos: ["TypeScript", "Angular", "Bootstrap", "Elixir", "Phoenix", "GraphQL", "PostgresQL"]
    },
    {
        id: "ikebab",
        name: "iKebab",
        url: "",
        cover: iKebab,
        category: "Perso",
        desc: "Fictional kebab delivery app, made during my full-stack training at the GRETA, where the customer can order a sandwich, then receive confirmation by mail while the restaurant can see the order from the database via RESTful API.",
        technos: ["HTML", "CSS", "PHP", "MySQL"]
    }, 
    {
        id: "greta",
        name: "GRETA",
        url: "",
        cover: greta,
        category: "Perso",
        desc: "Wordpress website made during my full-stack training at the GRETA des Hauts-de-Seine.",
        technos: ["WordPress"]
    }, 
    {
        id: "renault",
        name: "Renault Group",
        url: "",
        cover: renault,
        category: "Perso",
        desc: "Fully responsive Renault Group's website copy made during my full-stack training at the GRETA des Hauts-de-Seine.",
        technos: ["HTML", "CSS", "Bootstrap"]
    }, 
    {
        id: "njs",
        name: "Neon Clock",
        url: "https://sancxo.github.io/NeonJSClock",
        cover: neonClock,
        category: "Perso",
        desc: "Actual clock made in pure JS and HTML/CSS, made for personal training.",
        technos: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: "pokey-ball",
        name: "Pokey Ball Clone",
        url: "https://sancxo.github.io/PokeyBallClone",
        cover: pokeyBall,
        category: "Pro",
        desc: "Copy of a 3D game concept made with Three.js library as a test for a former employer.",
        technos: ["HTML", "CSS", "JavaScript", "Three.js"]
    },
    {
        id: "forest-view",
        name: "Forest View",
        url: "https://sancxo.github.io/forestview",
        cover: forestView,
        category: "Perso",
        desc: "First person landscape static view made with Three.js for personal training.",
        technos: ["HTML", "CSS", "JavaScript", "Three.js"]
    }, 
    {
        id: "rotating-cube",
        name: "Rotating 3D Cube",
        url: "https://sancxo.github.io/Rotating3DCube",
        cover: rotatingCube,
        category: "Perso",
        desc: "Rotating and interactive 3D cube made with Three.js for personal training.",
        technos: ["HTML", "CSS", "JavaScript", "Three.js"]
    }
]

const techIcons: {[index: string]: string} = {
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "Bootstrap": boostrapIcon,
    "JavaScript": jsIcon,
    "TypeScript": tsIcon,
    "React": reactIcon,
    "Angular": angularIcon,
    "Three.js": threejsIcon,
    "PWA": pwaIcon,
    "Node": nodeIcon,
    "Elixir": elixirIcon,
    "Phoenix": phoenixIcon,
    "PHP": phpIcon,
    "GraphQL": graphqlIcon,
    "PostgresQL": postgresIcon,
    "MySQL": mysqlIcon,
    "WordPress": wpIcon,
    "Elementor": elementorIcon
}

const techList: {[index: string]: string} = {
    "HTML/CSS": "HTML",
    "JavaScript": "JavaScript",
    "TypeScript": "TypeScript",
    "React": "React",
    "Angular": "Angular",
    "Three.js": "Three.js",
    // "Node": "Node",
    "Elixir/Phoenix": "Elixir",
    "PHP": "PHP",
    "GraphQL": "GraphQL",
    "WordPress": "WordPress"
}

const projectType: {[index: string]: string} = {
    "Pro": "Professional work",
    "Perso": "Personal and training"
}

export {projectList, techIcons, techList, projectType}