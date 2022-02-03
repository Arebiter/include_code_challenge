import React from "react";


const ItemForm = ({ itemInfo, setItemInfo }) => {
    //functions to handle input
    const handleChange = (e) => { //handle name changes only the name information in the item info
        // const info = { ...itemInfo };
        // info.name = e.target.value;
        // setItemInfo(info);
        setItemInfo({
            ...itemInfo,
            [e.target.name]: e.target.value
        });
        console.log(itemInfo)
    }


    return (
        <div className="item-form">
            <p>Add Item</p>
            <form className="item-create-form">
                <input type="text" className="item-name" onChange={handleChange} value={itemInfo.name} name="name" />
                <input type="number" className="item-quantity" onChange={handleChange} value={itemInfo.quantity} name="quantity" />
                <select name="status" className="item-status" onChange={handleChange} value={itemInfo.packed} name="packed">
                    <option value={false}>Unpacked</option>
                    <option value={true}>Packed</option>
                </select>
                <input type="submit" className="item-create-button" value="Add Item" />
            </form>
        </div>
    )
}

export default ItemForm;