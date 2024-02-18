import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/api/v1/todo`, {
                title: titleValue,
                isCompleted: false,
                description: descriptionValue

            }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            })
            console.log(response.data)
            setTitleValue('');
            setDescriptionValue('');
        } catch (error) {
            console.log('Error: ', error.message);
        }

    }



    const handleTitle = (event) => {
        setTitleValue(event.target.value);
    }
    const handleDescription = (event) => {
        setDescriptionValue(event.target.value);
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='innerWidth paddings flexCenter form-container'>
                <label>
                    Input:
                    <input type="text" value={titleValue} onChange={handleTitle} />
                    <input type="text" value={descriptionValue} onChange={handleDescription} />
                </label>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm