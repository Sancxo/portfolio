// icon imports
import htmlIcon from "../Imgs/icons/html.png";
import cssIcon from "../Imgs/icons/css.png";
import boostrapIcon from "../Imgs/icons/bootstrap.png";
import jsIcon from "../Imgs/icons/js.png";
import tsIcon from "../Imgs/icons/typescript.png";
import reactIcon from "../Imgs/icons/react.png";
import angularIcon from "../Imgs/icons/angular.png";
import vueIcon from "../Imgs/icons/vue.png";
import threejsIcon from "../Imgs/icons/threejs.png";
import pwaIcon from "../Imgs/icons/pwa.png";
import nodeIcon from "../Imgs/icons/node.png";
import rubyIcon from "../Imgs/icons/ruby.png";
import railsIcon from "../Imgs/icons/rails.png";
import elixirIcon from "../Imgs/icons/elixir.png";
import phoenixIcon from "../Imgs/icons/phoenix.png";
import phpIcon from "../Imgs/icons/php.png";
import wpIcon from "../Imgs/icons/wordpress.png";
import elementorIcon from "../Imgs/icons/elementor.png";
import graphqlIcon from "../Imgs/icons/graphql.png";
import postgresIcon from "../Imgs/icons/postgres.png";
import mysqlIcon from "../Imgs/icons/mysql.png";
import shopifyIcon from "../Imgs/icons/shopify.webp";
import tailwindIcon from "../Imgs/icons/tailwind.webp";

// screenshot imports
import frixel from "../Imgs/project-screenshots/frixel.png";
import charlesDarius from "../Imgs/project-screenshots/charles-darius.png";
import dfc from "../Imgs/project-screenshots/dfc.png";
import givingBack from "../Imgs/project-screenshots/giving-back.png";
import around from "../Imgs/project-screenshots/around-help.png";
import chomedu from "../Imgs/project-screenshots/chomedu-weather.png";
import gpgi from "../Imgs/project-screenshots/gpgi.png";
import boulderBike from "../Imgs/project-screenshots/boulder-bike-tour.png";
import fitTrack from "../Imgs/project-screenshots/fit-track.png";
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

const pro = "pro";
const perso = "perso";
const train = "train";

const html = "HTML";
const css = "CSS";
const btrp = "Bootstrap";
const tw = "Tailwind";

const pwa = "PWA"

const js = "Javascript";
const ts = "Typescript";
const ang = "Angular";
const react = "React";
const vue = "Vue";
const three = "Three.js";

const php = "PHP";
const wp = "Wordpress";
const elem = "Elementor";

const shop = "Shopify";

const elix = "Elixir";
const phx = "Phoenix";

const ruby = "Ruby";
const rails = "Rails";

const graphql = "GraphQL";
const mysql = "MySQL";
const psql = "PostgreSQL";

// data to feed each card in Projects page
const projectList: {
    id: string,
    name: string,
    url?: string,
    github?: string[],
    cover: string,
    category: string,
    desc: string,
    technos: string[]
}[] = [
        {
            id: "frixel",
            name: "Frixel",
            url: "https://www.frixel.fr/",
            cover: frixel,
            desc: "A home-made tailored CMS created with and for a web application agency based in Paris area. I was responsible for designing the database schema, managing junior developers, reviewing pull requests and integrating front-end.",
            category: pro,
            technos: [elix, phx, tw, psql],
            github: ["https://github.com/Frixel-tech"]
        },
        {
            id: "cd",
            name: "Charles Darius",
            url: "https://charlesdarius.fr/",
            cover: charlesDarius,
            desc: "A Shopify e-shop for a design and fashion creator based in Paris.",
            category: pro,
            technos: [shop, ts, html, css, psql]
        },
        {
            id: "giving-back",
            name: "Giving Back",
            url: "https://www.giving-back.io/",
            cover: givingBack,
            desc: "A landing-page for a charity-business video game project around NFTs. My task was to responsively integrate a pre-existing page.",
            category: pro,
            technos: [react, js, css]
        },
        {
            id: "dfc",
            name: "Dumont France Cave",
            url: "https://dumont-francecave.com/",
            cover: dfc,
            desc: "A shopify store front and e-shop for a wine-growing and wine-producing machinery and supplies retailer in Champagne area.",
            category: pro,
            technos: [shop, ts, html, css, psql]
        },
        {
            id: "around-help",
            name: "Around Help",
            url: "https://around-help.vercel.app/",
            github: ["https://github.com/Sancxo/around-help_front", "https://github.com/Sancxo/around-help_back"],
            cover: around,
            category: train,
            desc: "Aid platform between neighbors integrating geolocation and messaging, made as the final project of my OpenClassrooms training.",
            technos: [ruby, rails, psql, react, ts]
        },
        {
            id: "chomedu",
            name: "Chômedu Weather",
            url: "https://chomeduweather.vercel.app/",
            github: ["https://github.com/Sancxo/ChomeduWeather"],
            cover: chomedu,
            category: perso,
            desc: "French unemployment index prediction model made with a simple AI (perceptron) in pure TypeScript (no library) from INSEE official API and storing results in a serverless database (PostgreSQL through Supabase).",
            technos: [react, ts, psql]
        },
        {
            id: "gpgi",
            name: "GPGI fundings",
            url: "https://gpgi-funding-git-dev-jilliandum.vercel.app/",
            cover: gpgi,
            category: pro,
            desc: "International funding simulation app made as a freelancer for an academic researcher and professor in economics.",
            technos: [js, vue]
        },
        {
            id: "boulder-bike",
            name: "Boulder Bike Tour",
            url: "https://boulder-bike-tour.fly.dev",
            github: ["https://github.com/Sancxo/BoulderBikeTour"],
            cover: boulderBike,
            category: train,
            desc: "Fictionnal bike race website with rider geolocation and a user form contest made as a project for my OpenClassrooms fullstack path.",
            technos: [ruby, rails, psql]
        },
        {
            id: "fit-track",
            name: "Fit Track",
            url: "https://fit-track.fly.dev/",
            github: ["https://github.com/Sancxo/fitTrack"],
            cover: fitTrack,
            category: train,
            desc: "Full MVC app to track user activites through CRUD and using Devise to manage accounts.",
            technos: [ruby, rails, psql]
        },
        {
            id: "portfolio",
            name: "Portfolio",
            url: "https://simontirant.dev/",
            github: ["https://github.com/Sancxo/portfolio"],
            cover: portfolio,
            category: perso,
            desc: "This portfolio.",
            technos: [ts, react, php]
        },
        {
            id: "lmj",
            name: "La Maison Jungle",
            url: "https://sancxo.github.io/la-maison-jungle",
            github: ["https://github.com/Sancxo/la-maison-jungle"],
            cover: lmj,
            category: train,
            desc: 'Dynamic front-end e-commerce web page made in React for a course on OpenClassrooms.', // Features: dynamic cart (open/close, add items), automatic item catalog with parameters from model, light/dark mode switch written in localStorage, type filter.
            technos: [js, react]
        },
        {
            id: "wio",
            name: "Watch It Outside",
            url: "https://sancxo.github.io/watch-it-outside",
            github: ["https://github.com/Sancxo/watch-it-outside"],
            cover: wio,
            category: train,
            desc: "Responsive website for a fictional film festival in Boston made as an exam for my full-stack training class at OpenClassrooms.",
            technos: [html, css, btrp, js]
        },
        {
            id: "chalets-caviar",
            name: "Chalets & Caviar",
            url: "http://simontirant.dev/chalets-caviar",
            cover: chaletsCaviar,
            category: train,
            desc: "WordPress website for a fictional real estate agency in Aspen made as an exam for my full-stack training class at OpenClassrooms.",
            technos: [php, wp, elem]
        },
        {
            id: "snake",
            name: "Snake",
            url: "https://sancxo.github.io/snake",
            github: ["https://github.com/Sancxo/snake"],
            cover: snake,
            category: perso,
            desc: "Personal project made during summer holiday to stay in shape with vanilla JavaScript and canvas. Fully playable on computers and touch-screen mobiles, also downloadable on device as a Progressive Web App.",
            technos: [html, css, js, pwa]
        },
        {
            id: "7lieues",
            name: "7 Lieues",
            url: "https://7lieues.io",
            cover: septLieues,
            category: pro,
            desc: "WordPress website made as a freelance mission for 7 Lieues Technologies, which is now my actual employer.",
            technos: [php, wp, elem]
        },
        {
            id: "get-gifs",
            name: "Get Gifs",
            url: "http://get-gifs.simontirant.dev",
            github: ["https://github.com/Sancxo/get-gifs"],
            cover: getGifs,
            category: train,
            desc: "Technical test for a former employer where I should make a React app which connect to Giphy API to display the platform's Top20 gifs with several features.",
            technos: [js, react, btrp]
        },
        {
            id: "supplier-notation",
            name: "Supplier Notation",
            cover: supplierNotation,
            category: pro,
            desc: "Full-stack data visualisation feature made during a work-placement at 7 Lieues Technologies, containing a form to evaluate a supplier, then the app render data through charts.",
            technos: [ts, ang, btrp, elix, phx, graphql, psql]
        },
        {
            id: "ikebab",
            name: "iKebab",
            github: ["https://github.com/Sancxo/iKebab"],
            cover: iKebab,
            category: train,
            desc: "Fictional kebab delivery app, made during my full-stack training at the GRETA, where the customer can order a sandwich, then receive confirmation by mail while the restaurant can see the order from the database via RESTful API.",
            technos: [html, css, php, mysql]
        },
        {
            id: "greta",
            name: "GRETA",
            cover: greta,
            category: train,
            desc: "Wordpress website made during my full-stack training at the GRETA des Hauts-de-Seine.",
            technos: [html, css, wp]
        },
        {
            id: "renault",
            name: "Renault Group",
            cover: renault,
            category: train,
            desc: "Fully responsive Renault Group's website copy made during my full-stack training at the GRETA des Hauts-de-Seine.",
            technos: [html, css, btrp]
        },
        {
            id: "njs",
            name: "Neon Clock",
            url: "https://sancxo.github.io/NeonJSClock",
            github: ["https://github.com/Sancxo/NeonJSClock"],
            cover: neonClock,
            category: perso,
            desc: "Actual clock made in pure JS and HTML/CSS, made for personal training.",
            technos: [html, css, js]
        },
        {
            id: "pokey-ball",
            name: "Pokey Ball Clone",
            url: "https://sancxo.github.io/PokeyBallClone",
            github: ["https://github.com/Sancxo/PokeyBallClone"],
            cover: pokeyBall,
            category: train,
            desc: "Copy of a 3D game concept made with Three.js library as a test for a former employer.",
            technos: [html, css, js, three]
        },
        {
            id: "forest-view",
            name: "Forest View",
            url: "https://sancxo.github.io/forestview",
            github: ["https://github.com/Sancxo/forestview"],
            cover: forestView,
            category: perso,
            desc: "First person landscape static view made with Three.js for personal training.",
            technos: [html, css, js, three]
        },
        {
            id: "rotating-cube",
            name: "Rotating 3D Cube",
            url: "https://sancxo.github.io/Rotating3DCube",
            github: ["https://github.com/Sancxo/Rotating3DCube"],
            cover: rotatingCube,
            category: perso,
            desc: "Rotating and interactive 3D cube made with Three.js for personal training.",
            technos: [html, css, js, three]
        }
    ]

// Icons to be displayed in each project card depending on the technologies the project uses
const techIcons: { [index: string]: string } = {
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "Bootstrap": boostrapIcon,
    "Javascript": jsIcon,
    "Typescript": tsIcon,
    "React": reactIcon,
    "Angular": angularIcon,
    "Vue": vueIcon,
    "Three.js": threejsIcon,
    "PWA": pwaIcon,
    "Node": nodeIcon,
    "Ruby": rubyIcon,
    "Rails": railsIcon,
    "Elixir": elixirIcon,
    "Phoenix": phoenixIcon,
    "PHP": phpIcon,
    "GraphQL": graphqlIcon,
    "PostgreSQL": postgresIcon,
    "MySQL": mysqlIcon,
    "Wordpress": wpIcon,
    "Elementor": elementorIcon,
    "Shopify": shopifyIcon,
    "Tailwind": tailwindIcon
}

// Technologies displayed in the tech filter select input
const techFilterList: { [index: string]: string } = {
    "HTML/CSS": html,
    "JavaScript": js,
    "TyeScript": ts,
    "React": react,
    "Angular": ang,
    "Three.js": three,
    // "Node": "Node",
    "Ruby/Rails": ruby,
    "Elixir/Phoenix": elix,
    "PHP": php,
    "GraphQL": graphql,
    "Wordpress": wp,
    "Shopify": shop
}

// Types displayed in the type filter select input
const projectType: { [index: string]: string } = {
    pro: "Professional work",
    perso: "Personal project",
    train: "Training project"
}

export { projectList, techIcons, techFilterList, projectType }