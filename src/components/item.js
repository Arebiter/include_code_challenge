import React, { useState } from "react";


const Item = ({ item }) => {
    const { name, quantity } = item;
    const [packed, setPacked] = useState(false);

    const handlePacked = () => {
        if (packed) {
            setPacked(false);
        } else {
            setPacked(true);
        }
        console.log(packed);
    }
    return (
        <div>
            <p>{name}</p>
            <p>{quantity}</p>
            <input type="checkbox" id="packed-status" name="packed" onChange={handlePacked} />
            <label for="packed">Packed</label>
        </div>
    )
}

export default Item;