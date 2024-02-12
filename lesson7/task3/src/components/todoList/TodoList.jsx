import React from "react";
import TodoListItem from "./TodoListItem";
import "./todoList.scss";




const TodoList = ({ items, removeItem, markTodoDone }) => {
    const renderedItems = items.map((item, index) => (
        <TodoListItem
            key={index}
            item={item}
            index={index}
            removeItem={removeItem}
            markTodoDone={markTodoDone}
        />
    ));

    return (
        <div>
            <h1>Todo list</h1>
            <ul className="list-group">{renderedItems}</ul>
        </div>
    );
}



export default TodoList;

// class TodoList extends React.Component {
//   render () {
//     let items = this.props.items.map((item, index) => {
//       return (
//         <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
//       );
//     });
//     return (
//       <div>
//         <h1>Todo list</h1>
//         <ul className="list-group"> {items} </ul>
//       </div>
//     );
//   }
// }

