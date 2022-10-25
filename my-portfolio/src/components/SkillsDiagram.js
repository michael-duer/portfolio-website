import React from 'react';

import SankeyDiagram from './SankeyDiagram';
import sankeyDataset from '../data/sankeyDataset';

const aspectRatio = 960/500; //original width and height
// TODO replace magic number and make variables dynamic
const calculatedWidth = window.innerWidth/1.2; // magic number found with try and error
const calculatedHeight = calculatedWidth/aspectRatio;

function SkillsDiagram () {
  return (
    <div>
      <h2>Skills displayed in a Sankey diagram</h2>
      <SankeyDiagram data={sankeyDataset} width={calculatedWidth} height={calculatedHeight} />
    </div>
  )
};

export default SkillsDiagram;