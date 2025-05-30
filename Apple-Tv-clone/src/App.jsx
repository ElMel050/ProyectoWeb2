import { useState } from 'react'
import './App.css'

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/Notfound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
