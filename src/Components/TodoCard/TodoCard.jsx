import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import './TodoCard.css';

const TodoCard = ({ todo }) => {
    const { _id, title, description, isCompleted } = todo;
    const [isChecked, setIsChecked] = useState(isCompleted);
    let navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="container innerWidth flexColStart paddings">
            <div className='card'>
                <div className="left flexColStart">
                    <h4 className={`${isChecked ? 'completed' : ''} title flexEnd`} onClick={() => navigate(`/todos/${id}`)}>{title}</h4>
                    <h6>{description}</h6>
                </div>
                <div className="right">
                    <Checkbox className='flexEnd' checked={isChecked} onChange={handleCheckboxChange} />
                </div>


            </div>
        </div>

    )
}

export default TodoCard