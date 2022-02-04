import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { projectList, projectType, techFilterList } from "../Assets/Helpers/projectData";
import { colours, mediaQueries, sizes } from "../Assets/Style/style";
import { pageLoadAnimation } from "../Assets/Style/styled-components";
import Card from "../Components/Card";

const ProjectContainer = styled.div`
    ${pageLoadAnimation}
    margin-top: ${sizes.pageMarginTop};
    padding: ${sizes.pagePadding};

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

function Projects(): ReactElement {
    const [typeFilter, setTypeFilter] = useState("");
    const [techFilter, setTechFilter] = useState("");
    const [filterHeight, setFilterHeight] = useState(document.getElementById("filter-container")?.offsetHeight);

    const onMediaQueryMatches = () => setFilterHeight(document.getElementById("filter-container")?.offsetHeight);
    
    useEffect( () => {

        // used to go at the top of the page after loading
        window.scrollTo({top:0, behavior:"smooth"});
        
        onMediaQueryMatches();
        
        window.matchMedia(mediaQueries.mobile).addEventListener("change", onMediaQueryMatches );
        
        return () => {
            window.matchMedia(mediaQueries.mobile).removeEventListener("change", onMediaQueryMatches );
            // setFilterHeight(0);
        }
    }, [typeFilter, techFilter])
    
    const removeTag = (filterTag: string) => {
        if (Object.values(techFilterList).includes(filterTag)) setTechFilter("")
        else if (Object.keys(projectType).includes(filterTag)) setTypeFilter("");
    }

    const filterTags = (filterTag: string) => {
        return <FilterTag onClick={_ => removeTag(filterTag)} title={`Delete ${filterTag} filter`}>{ filterTag + " x"}</FilterTag>
    }

    return (
        <ProjectContainer>
            <FilterContainer id="filter-container">
                <div style={{padding: sizes.pagePadding}}>
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
                            {Object.keys(techFilterList).map((tech: string) => (
                                <option value={techFilterList[tech]} key={tech}>{tech}</option>
                            ))}
                        </select>
                    </InputContainer>
                </div>
            </FilterContainer>

            <CardsList style={{marginTop: filterHeight}}>
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