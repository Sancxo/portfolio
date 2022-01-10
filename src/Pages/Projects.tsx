import styled from "styled-components";
import { projectList } from "../Assets/Helpers/projectData";
import Card from "../Components/Card";

const CardsList = styled.ul`
    display: flex;
    justify-content: flex-start;
    & li {
        width: 20em;
        margin: 0 2em;
    }
`

function Projects() {
    return (
        <div style={{marginTop: "3em", padding: "0 12.5%"}}>
            <h3>My Projects</h3>
            <CardsList style={{listStyle: "none", padding: "0"}}>
                {projectList.map(project => (
                    <li key={project.id}>
                        <Card 
                            name={project.name} 
                            url={project.url}
                            cover={project.cover} 
                            category={project.category}
                            desc={project.desc}
                            technos={project.technos}
                        />
                    </li>
                ))}
            </CardsList>
        </div>
    );
};

export default Projects;