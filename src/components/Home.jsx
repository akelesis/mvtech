import React from 'react'
import Main from '../templates/Main'
import img from "../assets/imgs/construction.png"
import '../components/Home.css'

export default props =>
    <Main icon="home" className="body">
        <div className='home-title'>Site Under Construction!!</div>
        <div className="construction"><img src={img} alt=""/></div>
        <p className='home-sub'>Soon you'll discover a new way for building up your brand on the internet!</p>
    </Main>