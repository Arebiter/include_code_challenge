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
        e.preventDefault(); //prevent rerender of page
        setItems([
            ...items,//[{name, quantity, packed}, {name, quanity, packed}]
            { ...itemInfo }
        ]);
        // debugger
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