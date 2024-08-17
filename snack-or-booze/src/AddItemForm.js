import React, { useState, useContext } from "react";
import ItemContext from "./itemContext";
import { Redirect } from "react-router-dom";

import './AddItemForm.css';

function AddItemForm() {
    const { drinks, setDrinks, snacks, setSnacks } = useContext(ItemContext);
    const [submit, setSubmit] = useState(false);
    const [itemType, setItemType] = useState('');
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        recipe: '',
        serve: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const addId = formData.name.toLowerCase().replace(' ', '-');
        const newItem = ({
            id: addId,
            name: formData.name,
            description: formData.description,
            recipe: formData.recipe,
            serve: formData.serve
        });

        //If we are adding a snack, add to snacks 
        if (itemType === 'snacks') {
            setSnacks([...snacks, newItem]);

            //If we are adding a drink, add to drinks
        } else if (itemType === 'drinks') {
            setDrinks([...drinks, newItem]);
        }
        setSubmit(true);

    }

    //When form input changes, handle setting data
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    }
    //Radio button inputs
    const handleRadioChange = (e) => {
        setItemType(e.target.value);
    }

    //If we have submitted the form, redirect to that item types page
    if (submit) {
        return <Redirect to={`/${itemType}`} />;
    }

    return (
        <div id="add-item-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Select the type of item you are adding:</legend>
                    <label htmlFor="item-drink">Drink</label>
                    <input id="item-drink"
                        type="radio"
                        value="drinks"
                        checked={itemType === 'drinks'}
                        onChange={handleRadioChange} />

                    <label htmlFor="item-snack">Snack</label>
                    <input id="item-snack"
                        type="radio"
                        value="snacks"
                        checked={itemType === 'snacks'}
                        onChange={handleRadioChange} />
                </fieldset>

                <label htmlFor="item-name">Name: </label>
                <input id="item-name"
                    type="text"
                    name="name"
                    onChange={onInputChange} />

                <label htmlFor="description">Description: </label>
                <input id="description"
                    type="text"
                    name="description"
                    onChange={onInputChange} />

                <label htmlFor="recipe">Recipe: </label>
                <input id="recipe"
                    type="text"
                    name="recipe"
                    onChange={onInputChange} />

                <label htmlFor="serve">Serve: </label>
                <input id="serve"
                    type="text"
                    name="serve"
                    onChange={onInputChange} />
                <button type="submit">Add Item</button>
            </form >
        </div >
    );
}

export default AddItemForm;