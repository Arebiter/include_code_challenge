import React, { useState } from "react";


const Item = ({ item, setItems, items }) => {
    const { name, quantity, packed } = item;
    // const [packed, setPacked] = useState(false);

    // const handlePacked = () => {
    //     if (packed) {
    //         setPacked(false);
    //     } else {
    //         setPacked(true);
    //     }
    //     console.log(packed);
    // }

    const deleteItem = (e) => {
        setItems(items.filter((ele) => ele.id !== item.id));
    }

    const packItem = (e) => {

    }

    return (
        <div className="item">
            <p className="item-name">{name}</p>
            <p className="item-quantity">{quantity}</p>
            <button className="item-packed">Packed</button>
            <button className="item-delete" onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default Item;