import React, { useState } from "react";
import SkillsDiagram from '../components/SkillsDiagram';
import SkillsList from "../components/SkillsList";
import SwitchButton from "../components/SwitchButton";

function Skills() {
  const [switchButtonValue, setSwitchButtonValue] = useState({
      selected: ''
  });

  // set state to value received from 'SwitchButton' component 
  const passData = (data) => {
    setSwitchButtonValue(data);
  };

  return (
    <>
      <h3>My skills and my areas of application visualized as Sankey diagram or combined in a list:</h3>
      <SwitchButton passData={passData}/>
      { switchButtonValue==="list" ? <SkillsList /> : <SkillsDiagram /> }
    </>
  );
}

export default Skills;
