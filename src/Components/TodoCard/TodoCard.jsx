import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import './TodoCard.css';

const TodoCard = ({ todo, toggleComplete }) => {
    const { id, title, completed } = todo;
    let navigate = useNavigate();
    return (
        <div className="container innerWidth flexColStart paddings">
            <div className='card'>
                <h4 className={`${completed ? 'completed' : ''} title flexEnd`} onClick={() => navigate(`/todos/${id}`)}>{title}</h4>
                <h6 className='flexEnd' onClick={() => toggleComplete(id)}>{`Completed: ${completed}`}</h6>
            </div>
        </div>

    )
}

export default TodoCard