import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./List";

function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const onChangeHandler = (e) => {
    // console.log("curr value: " + e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    setItemList([...itemList, { item: currentItem, key: Date.now() }]); // spread operator.
    console.log("list items: ", itemList);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input
              value={currentItem}
              onChange={onChangeHandler}
              placeholder="Add item"
            />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={setItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;

// const items = [1,2,3];

// const newItems = [...items, 4];

// console.log(newItems); // [ 1, 2, 3, 4 ]

// ---

// const items = [1,2,3];

// const newItems = [...items, {some: "veggies", key: "someKey"}];

// console.log(newItems);// [ 1, 2, 3, { some: 'veggies', key: 'someKey' } ]

// ---

// const items = [];

// const newItems = [...items, {some: "veggies", key: "someKey"}];

// console.log(newItems);// [ { some: 'veggies', key: 'someKey' } ]
