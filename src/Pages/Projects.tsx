import { projectList } from "../Assets/Helpers/projectData";
import Card from "../Components/Card";
function Projects() {
    return (
        <div style={{marginTop: "3em", padding: "0 12.5%"}}>
            <h3>My Projects</h3>
            <ul style={{listStyle: "none", padding: "0"}}>
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
            </ul>
        </div>
    );
};

export default Projects;