// icon imports
import elixirIcon from "../Assets/Imgs/icons/elixir.png";
import phoenixIcon from "../Assets/Imgs/icons/phoenix.png";
import tsIcon from "../Assets/Imgs/icons/typescript.png";
import nodeIcon from "../Assets/Imgs/icons/node.png";
import reactIcon from "../Assets/Imgs/icons/react.png";
import angularIcon from "../Assets/Imgs/icons/angular.png";

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
        technos: ["ts", "graphql", "elixir"]
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