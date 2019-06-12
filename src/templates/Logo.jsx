import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import logo from '../assets/imgs/logo.png'

export default props =>
    <div className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
        </Link>
        <nav className="menu">
            <Link to="/">
                Início
            </Link>
            <Link to="/services">
                Serviços
            </Link>
            <Link to="/mail">
                Fale Conosco
            </Link>
            <Link to="/budget" id="budget-button">
                Solicite um Orçamento
            </Link>
        </nav>

    </div>