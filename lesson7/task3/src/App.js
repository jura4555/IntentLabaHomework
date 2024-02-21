import React, { useEffect, useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import "./app.scss";


const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetchTodoItems();
  }, [])


  const fetchTodoItems = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      if (!response.ok) {
        throw new Error('Failed to get data');
      }
      const data = await response.json();
      const initialArray = data.map(item => ({
        index: item.id,
        title: item.title,
        done: item.completed
      }));
      setTodoItems(initialArray);
    } catch (error) {
      console.error('An error occurred while receiving data:', error);
    }
  };

  const addItem = (todoItem) => {
    const newTodoItems = [...todoItems];
    newTodoItems.unshift({
      index: todoItems.length + 1,
      title: todoItem.newItemValue,
      done: false
    });
    setTodoItems(newTodoItems);
  }

  const removeItem = (itemIndex) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(itemIndex, 1);
    setTodoItems(newTodoItems);
  }

  const markTodoDone = (itemIndex) => {
    const newTodoItems = [...todoItems];
    var todo = newTodoItems[itemIndex];
    newTodoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? newTodoItems.push(todo) : newTodoItems.unshift(todo);
    setTodoItems(newTodoItems);
  }

  return (
    <div id="main">
      <TodoList items={todoItems} removeItem={removeItem} markTodoDone={markTodoDone} />
      <TodoForm addItem={addItem} />
    </div>
  );

}

export default App;


