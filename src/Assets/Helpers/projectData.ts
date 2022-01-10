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
        desc: "Responsive website for a fictionnal film festival in Boston made as an exam for my full-stack training class at OpenClassrooms.",
        technos: ["JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    {
        id: "get-gifs",
        name: "Get Gifs",
        url: "http://itlolcu.cluster031.hosting.ovh.net/get-gifs",
        cover: "",
        category: "Freelance and tests",
        desc: "Technical test for a former employer where I should make a React app which connect to Giphy Api to display the platform's Top 20 gifs, a random gif feature, a functional search bar with infinite scroll and a dark mode",
        technos: ["JavaScript", "React", "Bootstrap"]
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
    "GraphQL": ""
}

export {projectList, techIcons}