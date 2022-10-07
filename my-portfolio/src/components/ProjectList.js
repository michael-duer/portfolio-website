import { useState } from 'react';

import Project from "./Project"

function ProjectList() {
    
    return (
        <div className="project-list">
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default ProjectList;