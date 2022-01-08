import styled from "styled-components";
import { techIcons } from "../Assets/Helpers/projectData";
import { colours } from "../Assets/Style/style";

const CardTemplate = styled.div`
    text-align: center;
    border: solid ${colours.white} 1px;
    padding: 1em;
    width: 25%;
`

function Card ({name, url, cover, category, desc, technos}: {
    name: string, 
    url: string,
    cover: string,
    category: string, 
    desc: string,
    technos: string[]
}) {

    return (
        <CardTemplate>
            <div>
                <a style={{textDecoration: "none"}} href={url} target="_blank" rel="noreferrer">
                    <img src={cover} alt={name} title={name} />
                </a>
            </div>
            <div>
                <h4>{name}</h4>
                <p><small>{category}</small></p>
                {technos.map(tech => (
                    <img style={{height: "48px"}} src={techIcons[tech]} alt="" />
                ))}
                <p>{desc}</p>
                <a href={url} target="_blank" rel="noreferrer">Click here to see me live !</a>
            </div>
        </CardTemplate>
    )
}

export default Card;