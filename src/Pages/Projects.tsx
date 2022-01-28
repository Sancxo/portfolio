import { useEffect, useState } from "react";
import styled from "styled-components";
import { projectList, projectType, techList } from "../Assets/Helpers/projectData";
import { colours, mediaQueries, sizes } from "../Assets/Style/style";
import Card from "../Components/Card";

const ProjectContainer = styled.div`
    margin-top: 3em;
    padding: 0 12.5%;
    @media ${mediaQueries.tabletLandscape} { padding: 0; }
`
const FilterContainer = styled.div`
    position: fixed;
    top: ${sizes.headerHeight};
    left: 0;
    width: 100%;
    background: ${colours.black};
    z-index: 1;
    padding: 0 0 1em 0;
    @media ${mediaQueries.mobile} { padding: 0 0 .5em 0; }
`
const InputContainer = styled.div`
    text-align: center;
    @media ${mediaQueries.mobile} {
        display: flex;
        flex-direction column;
    }
`
const FirstSelect = styled.select`
    margin: 1em 1em 0 0;
    @media ${mediaQueries.mobile} { margin: 1em 0 .5em 0; }
`
const CardsList = styled.ul`
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
const FilterTagContainer = styled.div`
    padding-left: 25%;
    @media ${mediaQueries.tablet} {
        padding-left: 0;
        text-align: center;
    }
`
const FilterTag = styled.span`
    border: solid 1px ${colours.white};
    padding: .25em;
    border-radius: 5px;
    cursor: pointer;
`

function Projects() {
    const [typeFilter, setTypeFilter] = useState("");
    const [techFilter, setTechFilter] = useState("");
    const [filterSize, setFilterSize] = useState(document.getElementById("filter-container")?.offsetHeight);

    useEffect(() => {
        setFilterSize(document.getElementById("filter-container")?.offsetHeight);
        window.matchMedia(mediaQueries.mobile).addEventListener("change", _ => setFilterSize(document.getElementById("filter-container")?.offsetHeight))
    }, [])
    
    const removeTag = (filterTag: string) => {
        if (Object.values(techList).includes(filterTag)) setTechFilter("")
        else if (Object.keys(projectType).includes(filterTag)) setTypeFilter("");
    }

    const filterTags = (filterTag: string) => {
        return <FilterTag onClick={_ => removeTag(filterTag)} title={`Delete ${filterTag} filter`}>{ filterTag + " x"}</FilterTag>
    }

    return (
        <ProjectContainer>
            <FilterContainer id="filter-container">
                <div style={{padding: "0 12.5%"}}>
                    <FilterTagContainer>
                        <h2>My Projects</h2>

                        <p style={{ margin: "0.5em auto"}}>Active filters :</p>
                    </FilterTagContainer>

                    <InputContainer>
                        <p style={{height: "2em", margin: "0.5em auto"}}>{
                            typeFilter !== "" ? filterTags(typeFilter) : null
                        } {
                            techFilter !== "" ? filterTags(techFilter) : null
                        }{
                            typeFilter === "" && techFilter === "" ? <small>Choose a filter below to modify the projects list.</small> : null 
                        }</p>
                        <FirstSelect name="type-filter" id="type-filter" onChange={e => setTypeFilter(e.target.value)} value={typeFilter} >
                                <option value="">Choose a type to filter: </option>
                            {Object.keys(projectType).map((type: string) => (
                                <option value={type} key={type}>{projectType[type]}</option>
                            ))}
                        </FirstSelect>

                        <select name="tech-filter" id="tech-filter" onChange={e => setTechFilter(e.target.value)} value={techFilter} >
                                <option value="">Choose a tech to filter: </option>
                            {Object.keys(techList).map((tech: string) => (
                                <option value={techList[tech]} key={tech}>{tech}</option>
                            ))}
                        </select>
                    </InputContainer>
                </div>
            </FilterContainer>

            <CardsList style={{marginTop: filterSize}}>
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
        </ProjectContainer>
    );
};

export default Projects;