import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import './TodoCard.css';

const TodoCard = ({ todo }) => {
    const { id, title, completed } = todo;
    const [isChecked, setIsChecked] = useState(completed);
    let navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="container innerWidth flexColStart paddings">
            <div className='card'>
                <h4 className={`${isChecked ? 'completed' : ''} title flexEnd`} onClick={() => navigate(`/todos/${id}`)}>{title}</h4>
                <Checkbox className='flexEnd' checked={isChecked} onChange={handleCheckboxChange} />
            </div>
        </div>

    )
}

export default TodoCard