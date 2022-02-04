import React, { useState } from "react";


const Item = ({ item, setItems, items }) => {
    const { name, quantity, packed } = item;
    // const [packed, setPacked] = useState(false);

    const deleteItem = (e) => {
        setItems(items.filter((ele) => ele.id !== item.id));
    }

    const packItem = (e) => {
        setItems(items.map((ele) => { //go over the items
            //find the item you've clicked on based on the id in the items list
            if (ele.id === item.id) {
                return { //change the packed status of the item in the items list
                    ...ele, packed: !ele.packed
                }
            }
            return ele; //return the ele if you don't find it in the list
        }))
    }
    //added ternary to item className to add "complete" if the item's packed state is true 
    return (
        <div className={`item ${item.packed ? ("complete") : ("")}`}>
            <p className="item-name">{name}</p>
            <p className="item-quantity">{quantity}</p>
            <button className="item-packed" onClick={packItem}>Packed</button>
            <button className="item-delete" onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default Item;