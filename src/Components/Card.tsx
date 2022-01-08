import styled from "styled-components";
import { techIcons } from "../Assets/Helpers/projectData";
import { colours } from "../Assets/Style/style";

const CardTemplate = styled.div`
    text-align: center;
    border: solid ${colours.white} 1px;
    padding: 1em;
    width: 25%;
`
const ClickableImg = styled.a`  
    text-decoration: none;
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
            <ClickableImg href={url} target="_blank" rel="noreferrer">
                <img src={cover} alt={name} title={name} />
            </ClickableImg>
            {technos.map(tech => (
                <img src={techIcons[tech]} alt="" />
            ))}
            <p>{desc}</p>
            <a href={url} target="_blank" rel="noreferrer">Click here to see me live !</a>
        </CardTemplate>
    )
}

export default Card;