import React from "react";


const ItemForm = ({ itemInfo, setItemInfo }) => {
    //functions to handle input
    const handleName = (e) => { //handle name changes only the name information in the item info
        const info = { ...itemInfo };
        info.name = e.target.value;
        setItemInfo(info);
    }

    const handleQuantity = (e) => {
        const info = { ...itemInfo };
        info.quantity = e.target.value;
        setItemInfo(info);
    }


    return (
        <div className="item-form">
            <p>Add Item</p>
            <form className="item-create-form">
                <input type="text" className="item-name" onChange={handleName} />
                <input type="number" className="item-quantity" onChange={handleQuantity} />
                <select name="status" className="item-status">
                    <option value="unpacked">Unpacked</option>
                    <option value="packed">Packed</option>
                </select>
                <input type="submit" className="item-create-button" value="Add Item" />
            </form>
        </div>
    )
}

export default ItemForm;