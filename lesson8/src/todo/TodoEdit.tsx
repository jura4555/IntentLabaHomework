import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams, Link } from 'react-router-dom';
import todoStore from './TodoStore';
import { Todo } from '../components/Todo';
import './todoEdit.scss'


const TodoEdit: React.FC = observer(() => {
    const [todo, setTodo] = useState<Todo | null>(null);
    const { todoId } = useParams<{ todoId: string }>();

    useEffect(() => {
        if (todoId !== undefined) {
            const todoIdNumber = parseInt(todoId, 10);
            const foundTodo = todoStore.todos.find(todo => todo.id === todoIdNumber);
            setTodo(foundTodo || null);
        }
    }, [todoId]);

    const handleUpdate = () => {
        if (todo) {
            const updatedTodo = {
                ...todo,
                title: todo.title.trim(),
                completed: todo.completed
            }
            todoStore.updateTodo(updatedTodo);
            setTodo(null);
        }
    }

    return (
        <div className='edit-todo-container'>
            {todo && (
                <>
                    <h2>Edit Todo</h2>
                    <input type="text" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                    <label>
                        Completed:
                        <input type="checkbox" checked={todo.completed} onChange={() => setTodo({ ...todo, completed: !todo.completed })} />
                    </label>
                    <Link to={'/todos'}>
                        <button onClick={handleUpdate}>Update</button>
                    </Link>
                </>
            )}
        </div>
    );
});

export default TodoEdit;


