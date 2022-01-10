// icon imports
import htmlIcon from "../Imgs/icons/html.png";
import cssIcon from "../Imgs/icons/css.png";
import boostrapIcon from "../Imgs/icons/bootstrap.png";
import jsIcon from "../Imgs/icons/js.png";
import elixirIcon from "../Imgs/icons/elixir.png";
import phoenixIcon from "../Imgs/icons/phoenix.png";
import tsIcon from "../Imgs/icons/typescript.png";
import nodeIcon from "../Imgs/icons/node.png";
import reactIcon from "../Imgs/icons/react.png";
import angularIcon from "../Imgs/icons/angular.png";
import wpIcon from "../Imgs/icons/wordpress.png";

// screenshot imports
import lmj from "../Imgs/project-screenshots/lmj.png";
import wio from "../Imgs/project-screenshots/wio.png";

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
        id: "get-gifs",
        name: "Get Gifs",
        url: "http://itlolcu.cluster031.hosting.ovh.net/get-gifs",
        cover: "",
        category: "Pro",
        desc: "Technical test for a former employer where I should make a React app which connect to Giphy Api to display the platform's Top20 gifs with several features.",
        technos: ["JavaScript", "React", "Bootstrap"]
    },
    {
        id: "chalets-caviar",
        name: "Chalets & Caviar",
        url: "itlolcu.cluster031.hosting.ovh.net/chalets-caviar",
        cover: "",
        category: "Training course",
        desc: "WordPress website for a fictional real estate agency in Aspen made as an exam for my full-stack training class at OpenClassrooms.",
        technos: ["WordPress"]
    },
    {
        id: "7lieues",
        name: "7 Lieues",
        url: "https://7lieues.io",
        cover: "",
        category: "Pro",
        desc: "WordPress website made as a freelance mission for 7 Lieues Technologies, which is now my actual employer",
        technos: ["WordPress"]
    }
]

const techIcons: {[index: string]: string} = {
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "Bootstrap": boostrapIcon,
    "JavaScript": jsIcon,
    "TypeScript": tsIcon,
    "Node": nodeIcon,
    "React": reactIcon,
    "Angular": angularIcon,
    "Elixir": elixirIcon,
    "Phoenix": phoenixIcon,
    "GraphQL": "",
    "WordPress": wpIcon
}

export {projectList, techIcons}