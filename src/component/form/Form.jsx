import React, { useState } from "react";

import classes from "./Form.module.css";

const Form = ({ getResult }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleChange = event => {
        event.persist();
        let { name, value } = event.target;
        if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        }
    };

    const calcLove = e => {
        e.preventDefault();
        let data = { firstName, lastName };
        getResult(data);
        setFirstName("");
        setLastName("");
    };

    return (
        <form onSubmit={e => calcLove(e)} className={classes.Form}>
            <input
                type="text"
                value={firstName}
                name="firstName"
                onChange={e => handleChange(e)}
                placeholder="Enter First Name"
                className="Form__input"
                required
            />
            <input
                type="text"
                value={lastName}
                name="lastName"
                onChange={e => handleChange(e)}
                placeholder="Enter Last Name"
                required
            />
            <button type="submit" className="loading">
                Calculate Love %
            </button>
        </form>
    );
};

export default Form;
