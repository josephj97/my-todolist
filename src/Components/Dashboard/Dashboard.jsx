import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todolist from '../Todolist/Todolist';
import TodoItem from '../TodoItem/TodoItem';
import Header from '../Header/Header'
import TodoForm from '../TodoForm/TodoForm';

function Dashboard() {
    return (
        <div>
            <Header />
            <TodoForm />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Todolist />} />
                    <Route exact path="/todos/:id" element={<TodoItem />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Dashboard