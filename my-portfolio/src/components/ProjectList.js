import { useState } from 'react';

import Project from "./Project"

function ProjectList() {
    
    return (
    <>
        <h3>Projects:</h3>
        <div className="project-list">
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </>
    );
}

export default ProjectList;