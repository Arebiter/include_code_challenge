import React, { useState } from 'react';
import './App.scss';
import ItemForm from './components/itemForm';
import Item from './components/item';
function App() {
  /*
  Create a Travel checklist application that meets the specified requirements.
  ● Must be able to add items
  ● Items must have a name, quantity, and state (packed/unpacked)
  ● Must be able to mark and unmark items as packed
  
  Will use react hooks
  -useState for creating items
  
  -page will have area to create a form
    -need input for name
    -number input for amount
  
    each item made will be added to items array
  
  -page will have area displaying list of items
    -list will be made by mapping through items array
    -each item will have button for changing state
    -each item will have delete button
  */
  const [itemInfo, setItemInfo] = useState({
    "name": "",
    "quantity": 1,
    "packed": false
  });

  const [items, setItems] = useState([]) //will be an array of items


  const renderList = (
    items.map((item) => {
      return (<Item key={item.id} item={item} setItems={setItems} items={items} />);
    }).reverse()
  )


  return (
    <div className="App">
      <h1>Travel Checklist</h1>
      <div className='checklist-main'>
        <ItemForm setItemInfo={setItemInfo} itemInfo={itemInfo} setItems={setItems} items={items} />
        <div className='item-list'>
          {renderList}
        </div>
      </div>
    </div>
  );
}

export default App;
