import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todolist from '../Todolist/Todolist';

function Dashboard() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Todolist />} />
                    {/* <Route exact path="/todos/:id" children={<TodoItem />} /> */}
                </Routes>
            </Router>
        </div>
    )
}

export default Dashboard