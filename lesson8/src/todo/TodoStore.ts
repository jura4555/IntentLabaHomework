import { observable, action, makeObservable } from 'mobx';
import { Todo } from '../components/Todo'


class TodoStore {

    constructor() {
        makeObservable(this)
    }

    @observable todos: Todo[] = [];

    @action fetchTodos() {
        if (localStorage.getItem('todos') !== null) {
            this.todos = JSON.parse(localStorage.getItem('todos')||'[]');
        } else {
            this.fetchInitialTodos()
        }
    }

    @action async fetchInitialTodos() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!response.ok) {
                throw new Error('Failed to get data');
            }
            const data: { id: number; title: string; completed: boolean }[] = await response.json();
            const initialTodo: Todo[] = data.map(todo => ({
                id: todo.id,
                title: todo.title,
                completed: todo.completed
            }));
            this.todos = initialTodo;
            this.saveItems();
        } catch (error) {
            console.error('An error occurred while receiving data:', error);
        }
    }


    @action removeTodo = (todoId: number) => {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
        this.saveItems();
    }

    @action updateTodo(updatedTodo: Todo): void {
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            this.todos[index] = updatedTodo;
        }
        this.saveItems();
    }

    saveItems() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

const todoStore = new TodoStore();
export default todoStore;

