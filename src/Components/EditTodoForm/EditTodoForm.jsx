import React, { useState } from 'react'

const EditTodoForm = ({ todo, onUpdate }) => {
    const [titleValue, setTitleValue] = useState(todo.title || '');
    const [descriptionValue, setDescriptionValue] = useState(todo.description || '');

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value)
    };

    const handleDescriptionChange = (event) => {
        setDescriptionValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate({
            ...todo,
            title: titleValue,
            description: descriptionValue
        });
    };

    return (
        <div className="container innerWidth flexColStart paddings">
            <div className='card'>
                <div className="left flexColStart">
                    <input type="text" value={titleValue} onChange={handleTitleChange} placeholder='Title' />
                    <input type="text" value={descriptionValue} onChange={handleDescriptionChange} placeholder='Description' />
                </div>
                <button type='submit' onClick={handleSubmit}>Update Task</button>


            </div>
        </div>
    )
}

export default EditTodoForm