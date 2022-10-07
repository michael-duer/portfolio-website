import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function ProjectList(props) {
    const [ modalIsOpen, setModalIsOpen] = useState(false);
    
    function deleteHandler() {
        setModalIsOpen(true);
    }
    function closeModelHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="project-card">
            <h2>{"Project name"}</h2>
            <img className='project-image' src={"#"} alt="Picture of project" />
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>more details</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler}/>} 
            { modalIsOpen && <Backdrop onClick={closeModelHandler}/>} 
        </div>
    );
}

export default ProjectList;