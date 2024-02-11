import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Todolist = () => {
    const [todolist, setTodolist] = useState();
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodolist = res.data;
            setTodolist(responseTodolist);
        })
    });

    return (
        <div className='container'>
            {todolist && todolist.map(todo => {
                const { id, title, completed } = todo
                return (
                    <div className='card'
                        onClick={() => navigate(`/todos/${id}`)}
                    >
                        <h4>{title}</h4>
                        <h6>{`Completed: ${completed}`}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default Todolist