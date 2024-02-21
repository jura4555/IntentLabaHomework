import React from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import "./app.scss"; 



class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.fetchTodoItems = this.fetchTodoItems.bind(this);
    this.state = {
      todoItems: []
    };
  }

  componentDidMount() {
    this.fetchTodoItems();
  }

   async fetchTodoItems () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        if (!response.ok) {
            throw new Error('Failed to get data');
        }
        const data = await response.json();
        let initialArray = [];
        for(let i = 0; i < data.length; i++){
          initialArray.push({
            index: data[i].id, 
            title: data[i].title, 
            done: data[i].completed
          })
        }
        this.setState({ todoItems: initialArray });
    } catch (error) {
        console.error('An error occurred while receiving data:', error);
    }
  }

  addItem(todoItem) {
    const todoItems = [...this.state.todoItems];
    todoItems.unshift({
      index: todoItems.length + 1, 
      title: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }

  removeItem (itemIndex) {
    const todoItems = [...this.state.todoItems];
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }

  markTodoDone(itemIndex) {
    const todoItems = [...this.state.todoItems];
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }

  render() {
    return (
      <div id="main">
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;

