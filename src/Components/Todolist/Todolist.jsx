import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Todolist.css'
import Checkbox from '@mui/material/Checkbox';


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
        <div className='container paddings innerWidth flexColStart'>
            {todolist && todolist.map(todo => {
                const { id, title, completed } = todo
                return (
                    <div className='card innerWidth'>
                        <h4 className='title flexEnd' onClick={() => navigate(`/todos/${id}`)}>{title}</h4>
                        {/* <h6>{`Completed: ${completed}`}</h6> */}
                        <Checkbox className='flexEnd' size='small' />
                    </div>
                )
            })}
        </div>
    )
}

export default Todolist