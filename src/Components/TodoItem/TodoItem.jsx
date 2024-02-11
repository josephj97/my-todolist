import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material';

const TodoItem = () => {
    const { id } = useParams();
    const [todoItemDetails, setTodoItemDetails] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            const responseTodoItem = res.data;
            setTodoItemDetails(responseTodoItem);
        })
    })

    const { id: TodoItemId, title, completed } = todoItemDetails || {}

    return (
        <div>
            {todoItemDetails ? (
                <div>
                    <h1>{title}</h1>
                    <h4>{`Completed: ${completed}`}</h4>
                </div>
            ) : (
                <CircularProgress />
            )}

        </div>
    )
}

export default TodoItem