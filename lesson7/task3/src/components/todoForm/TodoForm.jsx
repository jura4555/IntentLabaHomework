import "./todoForm.scss";
import React, { useRef } from "react";


const TodoForm = ({ addItem }) => {
    const inputRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        const newItemValue = inputRef.current.value;
        if (newItemValue) {
            addItem({ newItemValue });
            inputRef.current.value = "";
        }
    };

    return (
        <form onSubmit={onSubmit} className="form-inline">
            <input type="text" ref={inputRef} className="form-control" placeholder="add a new todo..." />
            <button type="submit" className="btn btn-default">Add</button>
        </form>
    )
}

export default TodoForm;