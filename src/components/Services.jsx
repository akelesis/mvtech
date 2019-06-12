import React from 'react'
import Main from '../templates/Main'
import './Services.css'
import {Link} from 'react-router-dom'

export default props =>
    <Main>
        <div className="home-header">
            <div className="home-title">
                <h1>Você sempre à frente</h1>
            </div>
            <div className="home-sub">
                <p>
                    Sabemos que sua empresa precisa se destacar e temos exatamente o que você precisa para isto!
                    Com uma lista que vai desde E-commerce até sistemas de gerenciamento empresarial em nuvem, oferecemos soluções 
                    completas e sob medida para você alcançar os seus objetivos!
                </p>
            </div>
        </div>
        
        <div className="service-list">
            <h1 className="services-title">Nossos serviços:</h1>
            <div className="service-card">
                <i class="fas fa-cash-register card-icon"></i>
                <h1 className="service-info-title">E-commerce</h1>
                <p className="service-info">
                    Desenvolvemos serviços de E-commerce com os modulos mais utilizados da atualidade para que você não precise se preocupar com a segurança dos seus clientes!
                </p>
            </div>
            <div className="service-card">
                <i class="fas fa-mobile-alt card-icon"></i>
                <h1 className="service-info-title">Mobile</h1>
                <p className="service-info">
                    Desenvolvemos aplicações mobile nativas para a sua empresa se destacar em qualquer plataforma! 
                </p>
            </div>
            <div className="service-card">
                <i class="far fa-handshake card-icon"></i>
                <h1 className="service-info-title">Empresarial</h1>
                <p className="service-info">
                    Se o que você precisa é de um sistema de gerenciamento empresarial ou um canal de comunicação direta com os seus clientes online, também temos o que precisa!
                </p>
            </div>
            <div className="service-card">
                <i class="fas fa-wifi card-icon"></i>
                <h1 className="service-info-title">Web</h1>
                <p className="service-info">
                    Caso o que a sua empresa precise seja de um cartão de visitas na internet, pode contar com a gente! Certamente os seus clientes irão se apaixonar!
                </p>
            </div>
        </div>
        <div className="services-budget">
            <h1>Solicite um orçamento!</h1>
            <p>
                Teremos um imenso prazer em te atender e analisar o seu caso de forma individual, buscando a melhor combinação entre preço e qualidade. 
                Não perca tempo, solicite um orçamento conosco!
            </p>
            <small><Link to="/budget">clique aqui!</Link></small>
        </div>
    </Main>