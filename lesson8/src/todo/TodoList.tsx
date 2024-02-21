import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import todoStore from './TodoStore';
import { Link } from 'react-router-dom';
import './todoList.scss'

const TodoList: React.FC = observer(() => {
    useEffect(() => {
        todoStore.fetchTodos();
    }, []);

    const handleDelete = (todoId: number) => {
        todoStore.removeTodo(todoId);
    };

    return (
        <div className='todo-list-container'>
            <h2>Todo List</h2>
            <ul>
                {todoStore.todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <Link to={`/todos/edit/${todo.id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
})

export default TodoList;