import React, { useState } from "react";
import Item1 from "./Item";

function App() {
  const [item, setItem] = useState("");
  const [listItems, setListitems] = useState([]);
  function handleClick() {
    setListitems((pre) => [...pre, item]);
    setItem("");
  }

  function handleChange(e) {
    const value = e.target.value;
    setItem(value);
  }
  console.log(listItems);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem) => (
            <Item1 name={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
