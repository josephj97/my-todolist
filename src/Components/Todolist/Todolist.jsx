import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todolist.css'
import TodoCard from '../TodoCard/TodoCard';


const Todolist = () => {
    const [todolist, setTodolist] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/todo`).then((res) => {
            setTodolist(res.data.todos);

        })
    });


    return (
        <div>
            {todolist && todolist.map((todo) => {
                return (
                    <div key={todo._id}>
                        <TodoCard todo={todo} />
                    </div>
                )
            })}
        </div>
    )
}

export default Todolist