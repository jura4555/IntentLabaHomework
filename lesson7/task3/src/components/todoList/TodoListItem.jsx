import React from "react";
import "./todoListItem.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



const TodoListItem = ({ item, index, removeItem, markTodoDone }) => {

    const onClickClose = () => {
        const parseIndex = parseInt(index);
        removeItem(parseIndex);
    }

    const onClickDone = () => {
        const parseIndex = parseInt(index);
        markTodoDone(parseIndex);
    }

    const todoClass = item.done ? "done" : "undone";

    return (
        <li className="list-group-item ">
            <div className={todoClass}>
                <FontAwesomeIcon className="icon" icon={faCheck} onClick={onClickDone} />
                {item.title}
                <button type="button" className="close" onClick={onClickClose}>
                    &times;
                </button>
            </div>
        </li>
    );
}

export default TodoListItem;

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onClickClose = this.onClickClose.bind(this);
//     this.onClickDone = this.onClickDone.bind(this);
//   }
//   onClickClose() {
//     var index = parseInt(this.props.index);
//     this.props.removeItem(index);
//   }
//   onClickDone() {
//     var index = parseInt(this.props.index);
//     this.props.markTodoDone(index);
//   }
//   render () {
//     var todoClass = this.props.item.done ?
//         "done" : "undone";
//     return(
//       <li className="list-group-item ">
//         <div className={todoClass}>
//           <FontAwesomeIcon className="icon" icon={faCheck} onClick={this.onClickDone} />
//           {this.props.item.title}
//           <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
//         </div>
//       </li>
//     );
//   }
// }

