import styled from "styled-components";
import { projectType, techIcons } from "../Assets/Helpers/projectData";
import { colours } from "../Assets/Style/style";

const CardTemplate = styled.div`
    text-align: center;
    border: solid ${colours.white} 1px;
    padding: 1em;
    width: calc(100% - 2em);
    height: 66vh;
    max-height: 43.125em;
`

function Card ({id, name, url, cover, category, desc, technos}: {
    id: string,
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
                <h4 style={{margin: "1em auto"}}>{name}</h4>
                {
                    url !== "" ?
                        <a style={{textDecoration: "none"}} href={url} target="_blank" rel="noreferrer">
                            <img src={cover} alt={name} title={name} style={{width: "100%", height: "25vh", maxHeight: "15.5em", objectPosition: "50% top", objectFit: "cover"}}/>
                        </a>
                    :
                        <img src={cover} alt={name} title={name} style={{width: "100%", height: "25vh", maxHeight: "15.5em", objectPosition: "50% top", objectFit: "cover"}}/>
                }
            </div>
            <div style={{position: "relative", height: "45%"}}>
                <p><small>{projectType[category]}</small></p>
                {technos.map(tech => (
                    <img style={{height: "48px", margin: "0 0.25em"}} src={techIcons[tech]} alt={tech} title={tech} key={tech + id} />
                ))}
                <p>{desc}</p>
                {
                    url !== "" && <a href={url} target="_blank" rel="noreferrer" style={{position: "absolute", bottom: "-1em", left: "-1em", translate: "12.5% 0"}}>Click here to see me live !</a>
                }
            </div>
        </CardTemplate>
    )
}

export default Card;