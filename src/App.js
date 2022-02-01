import React, { useState } from 'react';
import './App.css';
import ItemForm from './components/itemForm';
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
    -button or check for state
  
    each item made will be added to items array
  
  -page will have area displaying list of items
    -list will be made by mapping through items array
    -each item will have button for checking state
    -each item will have delete button
    -maybe add an edit button?   
  */
  const [itemInfo, setItemInfo] = useState("");

  return (
    <div className="App">
      <h1>Travel Checklist</h1>
      <div className='checklist-main'>
        <ItemForm />
        <div className='item-list'>
          <p>item list</p>
        </div>
      </div>
    </div>
  );
}

export default App;
