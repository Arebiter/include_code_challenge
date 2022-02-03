import React from "react";


const Item = ({ item }) => {
    const { name, quantity, packed } = item;
    console.log(name);
    return (
        <div>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{packed}</p>
        </div>
    )
}

export default Item;