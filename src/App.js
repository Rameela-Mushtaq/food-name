import React from 'react'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
