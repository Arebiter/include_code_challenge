import React from "react";


const Item = ({ ...item }) => {
    console.log(...item);
    // console.log(packed);
    // const packedState = {
    //     if(packed)
    // }


    return (
        <div>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p></p>
        </div>
    )
}

export default Item;