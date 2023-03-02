import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Hape from 'pages/Hape'
import Sidebar from 'components/Sidebar'
import 'styles/Global.scss'

const App = () => {
    return (
        <div className='app-styled'>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<Hape />} />
            </Routes>
        </div>
    )
}

export default App