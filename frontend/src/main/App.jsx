import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Logo from '../templates/Logo'
import Routes from './Routes'
import Footer from '../templates/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Routes />
            <Footer/>
        </div>
    </BrowserRouter>
    