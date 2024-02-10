import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Todolist = () => {
    const [todolist, setTodolist] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodolist = res.data;
            setTodolist(responseTodolist);
        })
    });

    return (
        <div>
            {todolist && todolist.map(todo => {
                const { title, completed } = todo
                return (
                    <div>
                        <h4>{title}</h4>
                        <h6>{`Completed: ${completed}`}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default Todolist