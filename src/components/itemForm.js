import React from "react";


function ItemForm() {
    //function to handle input


    return (
        <div className="item-form">
            <p>Add Item</p>
            <form className="item-create-form">
                <input type="text" className="item-name" />
                <input type="number" className="item-quantity" />
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