import React, { useState } from "react";


const Item = ({ item, setItems }) => {
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

    }

    return (
        <div className="item">
            <p className="item-name">{name}</p>
            <p className="item-quantity">{quantity}</p>
            <button className="item-packed">Packed</button>
            <button className="item-delete">Delete</button>
        </div>
    )
}

export default Item;