import React from 'react'
import SwitchSelector from "react-switch-selector";

const options = [
  {
    label: "Sankey Diagram",
    value: "sankey",
    selectedBackgroundColor: "#0097e6" // TODO change color
  },
  {
    label: "List",
    value: "list",
    selectedBackgroundColor: "#fbc531" // TODO change color
  }
];

const initialSelectedIndex = options.findIndex(({ value }) => value === "sankey");

function SwitchButton(props) {
  // if button is pressed pass new value to parent component
  const onChangeHandler = (newValue) => {
    props.passData(newValue)
  };
  
  return (
    <div className="switch-button-container">
      <SwitchSelector
        onChange={onChangeHandler}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#353b48"}
        fontColor={"#f5f6fa"}
      />
    </div>
  );
}

export default SwitchButton