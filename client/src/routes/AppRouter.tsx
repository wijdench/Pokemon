import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import { Home } from '../pages'

export const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </Router>
)