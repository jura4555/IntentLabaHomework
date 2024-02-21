import React from "react";
import "./todoForm.scss"; 


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
      }

    onSubmit(event) {
        event.preventDefault();
        let newItemValue = this.inputRef.current.value;
        if(newItemValue){
            this.props.addItem({newItemValue});
            this.inputRef.current.value = '';
        }
    }

    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref={this.inputRef} className="form-control" placeholder="add a new todo..."/>
                <button type="submit" className="btn btn-default">Add</button> 
            </form>
        );
    }

}

export default TodoForm;