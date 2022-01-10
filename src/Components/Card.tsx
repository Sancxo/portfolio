import styled from "styled-components";
import { techIcons } from "../Assets/Helpers/projectData";
import { colours } from "../Assets/Style/style";

const CardTemplate = styled.div`
    text-align: center;
    border: solid ${colours.white} 1px;
    padding: 1em;
    width: 100%;
    height: 62.5vh
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
                <h4>{name}</h4>
                <a style={{textDecoration: "none"}} href={url} target="_blank" rel="noreferrer">
                    <img src={cover} alt={name} title={name} style={{width: "100%", height: "25vh", objectPosition: "50% top", objectFit: "cover"}}/>
                </a>
            </div>
            <div style={{position: "relative", height: "45%"}}>
                <p><small>{category}</small></p>
                {technos.map(tech => (
                    <img style={{height: "48px", margin: "0 0.25em"}} src={techIcons[tech]} alt={tech} title={tech} />
                ))}
                <p>{desc}</p>
                <a href={url} target="_blank" rel="noreferrer" style={{position: "absolute", bottom: "0", left: "0", translate: "12.5% 0"}}>Click here to see me live !</a>
            </div>
        </CardTemplate>
    )
}

export default Card;