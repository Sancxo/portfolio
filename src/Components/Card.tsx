import { ReactElement } from "react";
import styled from "styled-components";
import { projectType, techIcons } from "../Assets/Helpers/projectData";
import { colours } from "../Assets/Style/style";

// styled-components
const CardTemplate = styled.div`
    text-align: center;
    border: solid ${colours.white} 1px;
    padding: 1em;
    width: calc(100% - 2em);
    height: 37.5em;
    position: relative;
`
const CardImg = styled.img`
    width: 100%;
    height: 12.5em;
    object-position: 50% top;
    object-fit: cover;
`
const CardUrl = styled.a`
    margin: auto;
`
const TechnoMiniature = styled.img`
    transition: 300ms ease-in-out;
    &:hover { transform: scale(1.5); }
`

function Card ({id, name, url, cover, category, desc, technos}: {
    id: string,
    name: string, 
    url: string,
    cover: string,
    category: string, 
    desc: string,
    technos: string[]
}): ReactElement {

    return (
        <CardTemplate>
            <div>
                <h4 style={{margin: "1em auto"}}>{name}</h4>
                {
                    url !== "" ?
                        <a style={{textDecoration: "none"}} href={url} target="_blank" rel="noreferrer">
                            <CardImg src={cover} alt={name} title={name} />
                        </a>
                    :
                        <CardImg src={cover} alt={name} title={name} />
                }
            </div>
            <div style={{position: "relative", height: "45%"}}>
                <p><small>{projectType[category]}</small></p>
                {technos.map(tech => (
                    <TechnoMiniature style={{height: "48px", margin: "0 0.25em"}} src={techIcons[tech]} alt={tech} title={tech} key={tech + id} />
                ))}
                <p>{desc}</p>
            </div>
            {
                url !== "" && <CardUrl href={url} target="_blank" rel="noreferrer">Click here to see me live!</CardUrl>
            }
        </CardTemplate>
    )
}

export default Card;