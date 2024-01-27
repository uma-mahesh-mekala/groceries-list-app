import React from "react";

function GrocerieItem(props) {
  // calls the onChange event handler
  function handleCheck(event) {
    props.onChange(event);
  }
  return (
    <li>
      <label
        style={{
          textDecoration: props.item.checked ? "line-through" : "none",
          transition: "text-decoration 2s ease",
        }}
      >
        <input type="checkbox" onChange={handleCheck} id={props.index} />
        {props.item.itemName}
      </label>
    </li>
  );
}

export default GrocerieItem;
