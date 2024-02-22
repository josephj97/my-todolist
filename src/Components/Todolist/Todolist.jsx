import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todolist.css'
import TodoCard from '../TodoCard/TodoCard';


const Todolist = () => {
    const [todolist, setTodolist] = useState();
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

    return (
        <div>
            {todolist && todolist.map((todo) => {
                return (
                    <TodoCard key={todo._id} todo={todo} deleteTodo={deleteTodo} />
                )
            })}
        </div>
    )
}

export default Todolist