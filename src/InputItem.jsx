import React from "react";

function InputItem(props) {
  // call the onChnage event handle to change the state of groceryItem as the user entering the item
  function handleChange(event) {
    props.onChange(event);
  }

  // calls the onClick function to add the groceryItem and checked value to the prevItems array when user click the AddItem button
  function handleSubmit(event) {
    event.preventDefault();
    props.onClick(event);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="groceryItem"
        value={props.groceryItem}
        onChange={handleChange}
        placeholder="Enter Item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default InputItem;
