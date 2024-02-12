import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todolist.css'
import TodoCard from '../TodoCard/TodoCard';


const Todolist = () => {
    const [todolist, setTodolist] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodolist = res.data;
            setTodolist(responseTodolist);
        })
    });

    const toggleComplete = id => {
        setTodolist(todolist.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    return (
        <div>
            {todolist && todolist.map((todo, index) => {
                return (
                    <div>
                        <TodoCard todo={todo} key={index} toggleComplete={toggleComplete} />
                    </div>
                )
            })}
        </div>
    )
}

export default Todolist