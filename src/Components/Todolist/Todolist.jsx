import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todolist.css'
import TodoCard from '../TodoCard/TodoCard';


const Todolist = () => {
    const [todolist, setTodolist] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            setTodolist(res.data);

        })
    });


    return (
        <div>
            {todolist && todolist.map((todo) => {
                return (
                    <div key={todo.id}>
                        <TodoCard todo={todo} />
                    </div>
                )
            })}
        </div>
    )
}

export default Todolist