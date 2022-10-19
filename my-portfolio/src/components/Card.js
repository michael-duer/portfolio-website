import React from "react";
 
const Card = ({ item }) => {            
           
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
                            // create array of individual languages 
                            // to deal with the string "HTML / CSS / Javascript"
                            var singleLanguages = []
                            
                            // split string into individual languages
                            if(language === "HTML / CSS / Javascript") {
                                // split string at " / " using regex
                                language.split(/( \/ )/).map(element => {
                                        // ignore "/" elements and push rest into array
                                        if(element !== " / "){
                                            singleLanguages.push(element)  
                                        }       
                                })                  
                            } else {
                                singleLanguages.push(language)       
                            }
                
                            return (
                                singleLanguages.map((element, index) => {
                                    return (
                                        <span className='button language' key={index}>
                                            { element }
                                        </span>
                                    )
                                })
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