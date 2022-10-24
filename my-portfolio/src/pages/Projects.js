import { useState } from 'react';
import { projectsList } from "../data/projectsList" //json data
import Buttons from '../components/Buttons';
import Card from '../components/Card';


function Projects() {
    const [project, setProject] = useState(projectsList);
    const [filterName, setFilterName] = useState("all");

    // create array of used technologies in projects
    var usedTechnologies = [];

    //iterate over each project and add languages to array
    for(let i = 0; i < projectsList.length; i++) { 
        
        projectsList[i].languages.map(language => {
            // skip if already in array
            if(usedTechnologies.includes(language)) { return }
            //add to array
            usedTechnologies.push(language)
        });
    }
    
    // spread operator will display all the values from usedTechnologies
    const menuItems = [...usedTechnologies];
   
    // filter projects for used technology
    const filterItem = (filter) => {
        const newFilter = projectsList.filter((newVal) => {
          return newVal.languages.includes(filter); 
        });
        setProject(newFilter);
        setFilterName(filter);
    };

    const showAll = () => { 
        setProject(projectsList);
        setFilterName("all");
    }
    return (
    <> 
        <div className="project-list">
            <h3>Projects:</h3>
            <p>{ filterName } projects</p>
            <Buttons
                filterItem={filterItem}
                showAll={showAll}
                setProject={setProject}
                menuItems={menuItems}
            />
            <Card item={project} />
        </div>
    </>
    );
}

export default Projects;