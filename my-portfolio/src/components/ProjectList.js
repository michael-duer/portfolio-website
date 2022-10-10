import { useState } from 'react';

import { projects } from "../projects"

//import Project from "./Project"

function ProjectList() {
   
    return (
    <>
        <h3>Projects:</h3>
        <div className="project-list">
            <div className='project-container' >
                {projects.map((project, index) => (
                    <div key={index}>
                        <p className='project title'>{project.name.toUpperCase()}</p>
                        <p className='project description'><b>Description</b>: {project.description}</p>    
                        <p className='project concepts'><b>Concepts</b>: {project.concepts}</p>
                        <a className='project linkGithub' href={project.linkGithub}>Link to Code on Github</a>
                         <p className='project languages'>
                            { project.languages.map((language, index) => {
                            //add "/" after each element except for the last one (index=false)
                            return (
                                <span className='language' key={index}>
                                { language } 
                                </span>
                            )
                            })}
                        </p>
                    </div>
                ))}
            </div>
        
        </div>
    </>
    );
}

export default ProjectList;