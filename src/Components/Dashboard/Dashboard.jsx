import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todolist from '../Todolist/Todolist';
import TodoItem from '../TodoItem/TodoItem';
import Header from '../Header/Header'

function Dashboard() {
    return (
        <div>
            <Header />
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