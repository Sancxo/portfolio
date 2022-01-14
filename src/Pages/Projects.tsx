import React, { useState } from "react";
import styled from "styled-components";
import { projectList, projectType } from "../Assets/Helpers/projectData";
import Card from "../Components/Card";

const CardsList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & li {
        width: 20em;
        margin: 1em 2em;
    }
`

function Projects() {
    const [typeFilter, setTypeFilter] = useState("");

    return (
        <div style={{marginTop: "3em", padding: "0 12.5%"}}>
            <h3>My Projects</h3>
            
            <select name="type-filter" id="type-filter" onChange={e => setTypeFilter(e.target.value)} defaultValue={typeFilter} >
                    <option value="">Choose a type to filter: </option>
                {Object.keys(projectType).map((type: string) => (
                    <option value={type} key={type}>{type}</option>
                ))}
            </select>

            <CardsList style={{listStyle: "none", padding: "0"}}>
                {
                    projectList.map(project => (
                        typeFilter === project.category ||typeFilter === "" ?
                        <li key={project.id}>
                            <Card 
                                id={project.id}
                                name={project.name} 
                                url={project.url}
                                cover={project.cover} 
                                category={project.category}
                                desc={project.desc}
                                technos={project.technos}
                            />
                        </li> :
                        null
                    ))
                }
            </CardsList>
        </div>
    );
};

export default Projects;