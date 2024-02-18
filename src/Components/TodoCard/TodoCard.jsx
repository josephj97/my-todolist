import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import './TodoCard.css';
import axios from 'axios';

const TodoCard = ({ todo }) => {
    const { _id, title, description, isCompleted } = todo;
    const [isChecked, setIsChecked] = useState(isCompleted);
    let navigate = useNavigate();

    const handleCheckboxChange = (event, id) => {
        const newIsChecked = event.target.checked
        setIsChecked(newIsChecked);
        axios.put(`http://localhost:3000/api/v1/todo/${id}`, {
            isCompleted: newIsChecked
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        })
    };

    return (
        <div className="container innerWidth flexColStart paddings">
            <div className='card'>
                <div className="left flexColStart">
                    <h4
                        className={`${isChecked ? 'completed' : ''} title flexEnd`}
                    // onClick={() => navigate(`/todos/${_id}`)}
                    >{title}</h4>
                    <h6>{description}</h6>
                </div>
                <div className="right">
                    <Checkbox className='flexEnd' checked={isChecked} onChange={(event) => handleCheckboxChange(event, _id)} />
                </div>


            </div>
        </div>

    )
}

export default TodoCard