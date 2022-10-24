import React from "react";
import css from '../images/css-icon.png';
import javascript from '../images/javascript-icon.png';
import html from '../images/html-icon.png';
import r from '../images/r-icon.png';
import shiny from '../images/shiny-icon.png';
import python from '../images/python-icon.png';
import java from '../images/java-icon.png';
import reactIcon from '../images/react-icon.svg';
import SkillsDiagram from '../components/SkillsDiagram';


function Skills() {

    return (
    <>
        <h3>My skills and their applications visualised as Sankey Diagram or List:</h3>
        <SkillsDiagram/>
        <div className="skills-list">
            <div className='skill'>
                <img className='skills-icon' src={javascript} alt="Javascript"/>
                <p>Javascript</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src={html} alt="HTML"/>
                <p>HTML</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src={css} alt="CSS"/>
                <p>CSS</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src="https://d3js.org/logo.svg" alt="D3.js"></img>
                <p>Data-Drive-Document D3.js</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src={r} alt="R"/>
                <p>R</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src={shiny} alt="Shiny"/>
                <p>Shiny</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src={python} alt="Python"/>
                <p>Python</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src={java} alt="Java"/>
                <p>Java</p>
            </div>
            <div className='skill'>
                <div className="skills-icon" style={{padding:"1rem",border:"3px solid black"}}>Database</div>
                <p>Database (SQL)</p>
            </div>
        </div>
        <h4>At the moment I am also learning</h4>
        <div className="skills-list">
            <div className='skill'>
                <img className='skills-icon' src={reactIcon} alt="React"/>
                <p>React</p>
            </div>
            <div className='skill'>
                <img className='skills-icon' src="https://www.stata.com/includes/images/stata-logo-blue.svg" alt="Stata"/>
                <p>Stata</p>
            </div>
        </div>
    </>
    );
}

export default Skills;
// credits:
