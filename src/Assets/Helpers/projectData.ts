// icon imports
import elixirIcon from "../Imgs/icons/elixir.png";
import phoenixIcon from "../Imgs/icons/phoenix.png";
import tsIcon from "../Imgs/icons/typescript.png";
import nodeIcon from "../Imgs/icons/node.png";
import reactIcon from "../Imgs/icons/react.png";
import angularIcon from "../Imgs/icons/angular.png";

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
        id: "test",
        name: "Test",
        url: "https://sancxo.github.io/",
        cover: "",
        category: "Test",
        desc: "This is a test.",
        technos: ["ts", "angular", "elixir"]
    }
]

const techIcons: {[index: string]: string} = {
    "js": "",
    "ts": tsIcon,
    "node": nodeIcon,
    "react": reactIcon,
    "angular": angularIcon,
    "elixir": elixirIcon,
    "phoenix": phoenixIcon,
    "graphql": ""
}

export {projectList, techIcons}