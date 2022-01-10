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
import wpIcon from "../Imgs/icons/wordpress.png";
import elementorIcon from "../Imgs/icons/elementor.png";

// screenshot imports
import lmj from "../Imgs/project-screenshots/lmj.png";
import wio from "../Imgs/project-screenshots/wio.png";
import septLieues from "../Imgs/project-screenshots/7lieues.png";
import chaletsCaviar from "../Imgs/project-screenshots/chalets-caviar.png";
import getGifs from "../Imgs/project-screenshots/get-gifs.png";
import snake from "../Imgs/project-screenshots/snake.png";
import pokeyBall from "../Imgs/project-screenshots/pokey-ball.png";

const projectList: {
    id: string,
    name: string,
    url: string,
    cover: string,
    category: string,
    desc: string,
    technos: string[]
    }[] = [
    // {
    //     id: "test",
    //     name: "Test",
    //     url: "https://sancxo.github.io/",
    //     cover: "",
    //     category: "Test",
    //     desc: "This is a test.",
    //     technos: ["ts", "angular", "elixir"]
    // },
    {
        id: "lmj",
        name: "La Maison Jungle",
        url: "https://sancxo.github.io/la-maison-jungle",
        cover: lmj,
        category: "Training course",
        desc: 'Dynamic front-end e-commerce web page made in React for a course on OpenClassrooms.', // Features: dynamic cart (open/close, add items), automatic item catalog with parameters from model, light/dark mode switch written in localStorage, type filter.
        technos: ["JavaScript", "React"]
    },    
    {
        id: "wio",
        name: "Watch It Outside",
        url: "https://sancxo.github.io/watch-it-outside",
        cover: wio,
        category: "Training course",
        desc: "Responsive website for a fictional film festival in Boston made as an exam for my full-stack training class at OpenClassrooms.",
        technos: ["JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    {
        id: "chalets-caviar",
        name: "Chalets & Caviar",
        url: "itlolcu.cluster031.hosting.ovh.net/chalets-caviar",
        cover: chaletsCaviar,
        category: "Training course",
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
        technos: ["JavaScript", "HTML", "CSS", "PWA"]
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
        id: "pokey-ball",
        name: "Pokey Ball Clone",
        url: "https://sancxo.github.io/PokeyBallClone",
        cover: pokeyBall,
        category: "Pro",
        desc: "This is a test.",
        technos: ["JavaScript", "HTML", "Threejs"]
    },
]

const techIcons: {[index: string]: string} = {
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "Bootstrap": boostrapIcon,
    "JavaScript": jsIcon,
    "TypeScript": tsIcon,
    "React": reactIcon,
    "Angular": angularIcon,
    "Threejs": threejsIcon,
    "PWA": pwaIcon,
    "Node": nodeIcon,
    "Elixir": elixirIcon,
    "Phoenix": phoenixIcon,
    "GraphQL": "",
    "WordPress": wpIcon,
    "Elementor": elementorIcon
}

export {projectList, techIcons}