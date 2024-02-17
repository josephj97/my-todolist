import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
                userId: 1,
                title: inputValue,
                completed: false
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            })
            console.log(response.data)
            setInputValue('');
        } catch (error) {
            console.log('Error: ', error.message);
        }

    }



    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='innerWidth paddings flexCenter form-container'>
                <label>
                    Input:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm