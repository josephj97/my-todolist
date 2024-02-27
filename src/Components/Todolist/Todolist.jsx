import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todolist.css'
import TodoCard from '../TodoCard/TodoCard';
import EditTodoForm from '../EditTodoForm/EditTodoForm';


const Todolist = () => {
    const [todolist, setTodolist] = useState([]);
    const [editingTodoId, setEditingTodoId] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/todo`).then((res) => {
            setTodolist(res.data.todos);

        })
    });

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/todo/${id}`);
            console.log(`Item is deleted: ${id}`)
            setTodolist(todolist.filter(todo => todo.id !== id));
        } catch (error) {
            console.log("Can't delete")
        }
    };

    const updateTodo = (updatedTodo) => {
        axios.put(`http://localhost:3000/api/v1/todo/${updatedTodo._id}`, {
            title: updatedTodo.title,
            description: updatedTodo.description
        })
            .then(res => {
                console.log('Todo updated successfully:', res.data);
                setTodolist(todolist.map(todo => (todo._id === updatedTodo._id ? res.data : todo)));
                setEditingTodoId(null);
            })
            .catch(error => {
                console.error('Error updating todo:', error)
            })
    }

    const editTodo = (id) => {
        setEditingTodoId(id);
    }

    return (
        <div>
            {todolist && todolist.map((todo) => {
                return (
                    todo._id === editingTodoId ? (
                        <EditTodoForm key={todo._id} todo={todo} onUpdate={updateTodo} />
                    ) : (
                        <TodoCard key={todo._id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )

                )
            })}
        </div>
    )
}

export default Todolist