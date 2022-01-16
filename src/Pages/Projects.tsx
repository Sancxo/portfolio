import { useState } from "react";
import styled from "styled-components";
import { projectList, projectType, techList } from "../Assets/Helpers/projectData";
import { colours, sizes } from "../Assets/Style/style";
import Card from "../Components/Card";


const FilterContainer = styled.div`
    position: fixed;
    top: ${sizes.headerHeight};
    left: 12.5%;
    width: 75%;
    background: ${colours.black};
    z-index: 1;
    padding: 3em;
    padding-top: 0;
    height: 15vh;
`
const CardsList = styled.ul`
    margin-top: calc(15vh + 3em);
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & li {
        width: 20em;
        margin: 1em 2em;
    }
`
const FilterTag = styled.span`
    border: solid 1px ${colours.white};
    padding: 0.25em;
    border-radius: 5px;
    cursor: pointer;
`

function Projects() {
    const [typeFilter, setTypeFilter] = useState("");
    const [techFilter, setTechFilter] = useState("");

    const removeTag = (filterTag: string) => {
        if (Object.values(techList).includes(filterTag)) setTechFilter("")
        else if (Object.keys(projectType).includes(filterTag)) setTypeFilter("");
    }

    const filterTags = (filterTag: string) => {
        return <FilterTag onClick={_ => removeTag(filterTag)} title={`Delete ${filterTag} filter`}>{ filterTag + " x"}</FilterTag>
    }

    return (
        <div style={{marginTop: "3em", padding: "0 12.5%"}}>
            <FilterContainer id="filter-container">
                <h3>My Projects</h3>

                <p>Active filters : {typeFilter !== "" ? filterTags(typeFilter) : null} {techFilter !== "" ? filterTags(techFilter) : null}</p>

                <div style={{textAlign: "center"}}>
                    <select style={{marginRight: "1em"}} name="type-filter" id="type-filter" onChange={e => setTypeFilter(e.target.value)} value={typeFilter} >
                            <option value="">Choose a type to filter: </option>
                        {Object.keys(projectType).map((type: string) => (
                            <option value={type} key={type}>{projectType[type]}</option>
                        ))}
                    </select>

                    <select name="tech-filter" id="tech-filter" onChange={e => setTechFilter(e.target.value)} value={techFilter} >
                            <option value="">Choose a tech to filter: </option>
                        {Object.keys(techList).map((tech: string) => (
                            <option value={techList[tech]} key={tech}>{tech}</option>
                        ))}
                    </select>
                </div>
            </FilterContainer>

            <CardsList>
                {
                    projectList.map(project => (
                        typeFilter === project.category || typeFilter === "" ?
                            project.technos.includes(techFilter) || techFilter === "" ?
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
                                null :
                            null
                    ))
                }
            </CardsList>
        </div>
    );
};

export default Projects;