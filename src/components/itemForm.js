import React from "react";


const ItemForm = ({ itemInfo, setItemInfo, items, setItems }) => {
    //functions to handle input
    // console.log(itemInfo);
    console.log(items);
    const handleChange = (e) => {
        setItemInfo({
            ...itemInfo,
            [e.target.name]: e.target.value
        });
    }

    //hitting submit should clear this information and reset the state
    const submitItemInfo = (e) => {
        e.preventDefault();
        setItems([
            ...items,//[{name, quantity, packed}, {name, quanity, packed}]
            { ...itemInfo, id: `${itemInfo.name}-${Math.random() * 1000}` }//create a random id for the items that are added to the list 
            //the id may be a problem later as there might be duplicate numbers but adding the item name makes it more unique, should be ok for now 
        ]);
        setItemInfo({ //to reset the form after submitting
            "name": "",
            "quantity": 1,
            "packed": false
        })

    }
    return (
        <div className="item-form">
            <form className="item-create-form" onSubmit={submitItemInfo}>
                <input type="text" className="item-name" placeholder="Name" onChange={handleChange} value={itemInfo.name} name="name" maxLength="40" />
                <input type="number" className="item-quantity" onChange={handleChange} value={itemInfo.quantity} name="quantity" min="1" />
                <button className="item-create-button">Add Item</button>
            </form>
        </div>
    )
}

export default ItemForm;