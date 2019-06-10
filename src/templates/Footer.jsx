import React from 'react'
import './Footer.css'
import logo from '../assets/imgs/logo.png'

export default props =>
    <footer className="footer">
        <span>
            Desenvolvido com <i className="fa fa-heart text-danger"></i> e <i className="fa fa-coffee"></i> por
            <img src={logo} alt="mvtech solutions" className="logo"/>
        </span>
    </footer>