import React from "react";


const ItemForm = ({ itemInfo, setItemInfo, items, setItems }) => {
    //functions to handle input
    // console.log(itemInfo);
    // console.log(items);
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
            { ...itemInfo, id: Math.random() * 1000 }//create a random id for the items that are added to the list 
            //the id may be a problem later as there might be duplicate numbers but generating a random number should be ok for now 
        ]);
        setItemInfo({ //to reset the form after submitting
            "name": "",
            "quantity": 0,
            "packed": false
        })

    }
    return (
        <div className="item-form">
            <p>Add Item</p>
            <form className="item-create-form" onSubmit={submitItemInfo}>
                <input type="text" className="item-name" onChange={handleChange} value={itemInfo.name} name="name" />
                <input type="number" className="item-quantity" onChange={handleChange} value={itemInfo.quantity} name="quantity" />
                {/* <select name="status" className="item-status" onChange={handleChange} value={itemInfo.packed} name="packed">
                    <option value={false}>Unpacked</option>
                    <option value={true}>Packed</option>
                </select> */}
                <input type="submit" className="item-create-button" value="Add Item" />
            </form>
        </div>
    )
}

export default ItemForm;