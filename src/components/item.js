import React, { useState } from "react";


const Item = ({ item, setItems, items }) => {
    const { name, quantity, packed, id } = item; //destructure item

    const deleteItem = (e) => {
        setItems(items.filter((ele) => ele.id !== id));
        //delete items by filtering out any items in the item list with the same id as current item
    }

    const packItem = (e) => {
        setItems(items.map((ele) => { //go over the items
            //find the item you've clicked on based on the id in the items list
            if (ele.id === id) {
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
            <div className="item-info-section">
                <p className="item-name">{name}</p>
                <p className="item-quantity">x {quantity}</p>
            </div>
            <div className="item-buttons">
                <button className="item-delete" onClick={deleteItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <button className="item-packed" onClick={packItem}>{packed ? "Packed" : "Unpacked"}</button>
            </div>
        </div>
    )
}

export default Item;