import React, { useEffect, useState } from 'react';
import './Todolist.css'
import TodoCard from '../TodoCard/TodoCard';
import EditTodoForm from '../EditTodoForm/EditTodoForm';
import * as Apis from '../../api/TodoAPI'

const Todolist = () => {
    const [todolist, setTodolist] = useState([]);
    const [editingTodoId, setEditingTodoId] = useState(null);

    useEffect(() => {
        Apis.getAllTodos(
            (response) => {
                setTodolist(response.data.todos);
            }),
            () => {
                alert('Error')
            }
    });

    const deleteTodo = (id) => {
        Apis.deleteTodo(
            (id) => {
                setTodolist(todolist.filter(todo => todo.id !== id));
            }, id),
            () => {
                alert('Error')
            }
    };

    const updateTodo = (updatedTodo) => {
        Apis.updateTodo(
            (response) => {
                setTodolist(todolist.map(todo => (todo._id === updatedTodo._id ? response.data : todo)));
                setEditingTodoId(null);
            }, updatedTodo),
            () => {
                alert('Error')
            }
    }

    const editTodo = (id) => {
        setEditingTodoId(id);
    }

    const toggleCheckbox = (event, id) => {
        Apis.completeTodo(
            (response) => {
                console.log(response.data)
            }, event, id),
            () => {
                alert('Error')
            }
    }

    return (
        <div>
            {todolist && todolist.map((todo) => {
                return (
                    todo._id === editingTodoId ? (
                        <EditTodoForm key={todo._id} todo={todo} onUpdate={updateTodo} />
                    ) : (
                        <TodoCard key={todo._id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleCheckbox={toggleCheckbox} />
                    )

                )
            })}
        </div>
    )
}

export default Todolist