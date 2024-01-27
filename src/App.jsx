import React, { StrictMode } from "react";
import GrocerieItem from "./GroceryItem";
import InputItem from "./InputItem";
import Heading from "./Heading";

function App() {
  let [groceryItem, setGroceryItem] = React.useState("");
  let [items, setItems] = React.useState([]);

  // sets the groceryItem value as the user enetering in the input element
  function handleChange(event) {
    const newValue = event.target.value;
    setGroceryItem(newValue);
  }

  // add the groceryItem and checked value to the previos items array
  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, { itemName: groceryItem, checked: false }];
    });
    setGroceryItem("");
  }

  // changes the checked value whenever user clicks on the checkbox of a particular groceryItem
  function handleCheck(event) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[parseInt(event.target.id)].checked =
        !updatedItems[parseInt(event.target.id)].checked;
      return updatedItems;
    });
  }
  return (
    <StrictMode>
      <div>
        <Heading headingText="Groceries List" />
        <div className="itemInput">
          <InputItem
            groceryItem={groceryItem}
            onChange={handleChange}
            onClick={handleClick}
          />
        </div>
        <ul>
          {items.map((item, index) => {
            return (
              <GrocerieItem
                key={index}
                item={item}
                index={index}
                onChange={handleCheck}
              />
            );
          })}
        </ul>
      </div>
    </StrictMode>
  );
}

export default App;
