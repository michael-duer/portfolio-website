import React from "react";
 
const Card = ({ item }) => {            
           // destructuring props
  return (
    <>
        <div className='project-container' >
            { item.map((Project, index) => (
                <div className='project' key={index}>
                    <p className='title'>{Project.name.toUpperCase()}</p>
                    <p className='description'><b>Description</b>: {Project.description}</p>    
                    <p className='concepts'><b>Concepts</b>: {Project.concepts}</p>
                    <a className='linkGithub' href={Project.linkGithub}>Link to Code on Github</a>
                    <p className='languages'>
                        { Project.languages.map((language, index) => {
                            //add "/" after each element except for the last one (index=false)
                            return (
                                <span className='button language' key={index}>
                                    { language } 
                                </span>
                            )
                        })}
                    </p>
                </div>
            ))}
        </div>
    </>
  );
};

export default Card;