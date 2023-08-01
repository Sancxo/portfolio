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
    position: relative;
    z-index: 1;
    object-position: 50% top;
    object-fit: cover;
    transition: 300ms ease-in-out;
    &:hover { transform: scale(1.25); }
`
const CardUrl = styled.a`
    margin-right: 0.5rem;
    & svg {
        transition: 500ms;
        color: ${colours.white}
    }    
    & svg:hover {
        color: ${colours.neonGreen};
        transform: rotate(-45deg)
    }
`
const GitHub = styled.a`
    color: ${colours.white};
    margin: 0 .5rem;
        & svg {
            transition: 500ms;
            border-radius: 50%;
    
            &.odd:hover {
                color: ${colours.neonGreen};
                box-shadow: 0 0 1em ${colours.neonGreen};
                transform: rotate(-45deg);
            }

            &.even:hover {
                color: ${colours.neonBlue};
                box-shadow: 0 0 1em ${colours.neonBlue};
                transform: rotate(45deg);
            }
        }
`

const TechnoMiniature = styled.img`
    transition: 300ms ease-in-out;
    &:hover { transform: scale(1.5); }
`

function Card({ id, name, url, github, cover, category, desc, technos }: {
    id: string,
    name: string,
    url: string | undefined,
    github: string[] | undefined,
    cover: string,
    category: string,
    desc: string,
    technos: string[]
}): ReactElement {

    return (
        <CardTemplate>
            <div>
                <h4 style={{ margin: "1em auto" }}>{name}</h4>
                {
                    url !== "" ?
                        <a style={{ textDecoration: "none" }} href={url} target="_blank" rel="noreferrer">
                            <CardImg src={cover} alt={name} title={name} />
                        </a>
                        :
                        <CardImg src={cover} alt={name} title={name} />
                }
            </div>
            <div style={{ position: "relative", height: "45%" }}>
                <p><small>{projectType[category]}</small></p>
                {technos.map(tech => (
                    <TechnoMiniature style={{ height: "48px", margin: "0 0.25em" }} src={techIcons[tech]} alt={tech} title={tech} key={tech + id} />
                ))}
                <p>{desc}</p>
            </div>
            {
                url && <CardUrl href={url} target="_blank" rel="noreferrer" title={`Visit this page online: ${url}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 17 22.028" version="1.1" width="34" height="34">
                        <g id="layer1" transform="translate(3.7859e-7 -722.07)">
                            <g id="g1563" transform="matrix(.23944 0 0 .23944 94.337 797.27)">
                                <path id="path1565" fill="currentColor" d="m-368.99-226.1v-9h-4v-8h-4v-8h-4v-9h-5v-4h-4v-8h9v4h4v12h4v-54h8v38h4v-17h9v17h4v-13h8v17h4v-13h5v5h4v29h-4v12h-5v9h-33z" />
                                <path id="path1567" fill="#000000" d="m-372.99-222.1v-13h-4v-8h-4v-8h-5v-9h-4v-4h-4v-12h13v4h4v-38h4v-4h8v4h4v17h9v4h12v4h9v4h4v5h4v29h-4v12h-4v13h-42zm37-4v-9h5v-12h4v-29h-4v-5h-5v13h-4v-17h-8v13h-4v-17h-9v17h-4v-38h-8v54h-4v-12h-4v-4h-9v8h4v4h5v9h4v8h4v8h4v9h33z" />
                            </g>
                        </g>
                    </svg>
                </CardUrl>
            }
            {
                github && github.map((github_url, index) => {
                    return <GitHub href={github_url} key={github_url} target="_blank" rel="noreferrer" title={`Visit this repo online: ${github_url}`}>
                        <svg className={index % 2 === 0 ? "even" : "odd"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1" width="34" height="34">
                            <g>
                                <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </g>
                        </svg>
                    </GitHub>
                })
            }
        </CardTemplate >
    )
}

export default Card;