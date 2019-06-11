import React from 'react'
import Main from '../templates/Main'
import '../components/Home.css'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import './slider-animations.css';
import './styles.css';
import 'normalize.css/normalize.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const content = [
    {
        title: 'Ferramentas para impulsionar seu negócio',
        description:
            'Oferecemos vários produtos para facilitar a vida da sua empresa e otimizar seus resultados!',
        button: 'Conheça nossos produtos',
        image: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        title: 'Queremos te ajudar!',
        description:
            'Se ainda não sabe muito bem o que procura, entre em contato conosco! Será um prazer conversar com você e descobrir qual a melhor solução para a sua empresa! ',
        button: 'Fale conosco',
        image: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        title: 'Soluções Inteligentes',
        description:
            'Estamos prontos para oferecer as melhores soluções para você e o seu negócio com alta qualidade e tecnologias de ponta',
        button: 'Faça um orçamento',
        image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }
]


export default props =>
    <Main icon="home" className="body">
        <div className="home-header">
            <div className="home-title">
                <h1>Sua marca no futuro</h1>
            </div>
            <div className="home-sub">
                <p>
                    Desenvolvemos soluções com tecnologia de ultima geração para que a sua empresa esteja sempre à frente.
                    Com a utilização de boas práticas de desenvolvimento temos a segurança de que o seu sistema manterá a
                    capacidade de evoluir de acordo com a necessidade da sua empresa e dos seus negócios!
                </p>
                <small><a href="#">Clique aqui e conheça nossos serviços</a></small>
            </div>
        </div>
        <div className="carousel">
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        <div className="about-content">
            <h1 className="about-title">Sobre nós</h1>
            <hr className="about-hr" />
            <p className="about-text">
                Somos uma empresa que tem como foco dar asas aos planos dos nossos clientes, tornar as suas necessidades em soluções e
                vê-los desenvolvendo todo o potencial que seus negócios trazem consigo. Acreditamos que para cada boa ideia existe um
                universo de possibilidades para ser explorado e que quanto maior o alcance que estas ideias tiverem maior a possibilidade
                de sucesso. E é por este motivo que desenvolvemos soluções tecnológicas com paixão pois, para nós, desenvolver tecnologia é
                desenvolver sonhos.
            </p>
        </div>
        <div className="tech">
            <h1 className="tech-title">Tecnologia que move sonhos!</h1>
            <div className="cards-tech">
                <div className="tech-icon">
                    <i className="fab fa-node-js lang-icon"></i>
                    <i className="fab fa-laravel lang-icon"></i>
                </div>
                <div className="tech-text">
                    <p>
                        Com motores como Node JS e Laravel o seu site tem o que existe de mais moderno em quesito de Backend. 
                        Consultas em bancos de dados otimizadas e maior confiança quando se trata de segurança dos seus dados!
                    </p>
                </div>
            </div>
            <div className="cards-tech">
                <div className="tech-icon">
                    <i className="fab fa-react lang-icon"></i>
                    <i className="fab fa-vuejs lang-icon"></i>
                    <i className="fab fa-angular lang-icon"></i>
                </div>
                <div className="tech-text">
                    <p>
                        Ao utilizar React, VueJS e Angular temos a certeza de entregar belos layouts de forma otimizada e prontos para
                        todos os tipos de dispositivos, trazendo assim uma experiência fluida e prazerosa para os seus clientes!
                    </p>
                </div>
            </div>
        </div>
    </Main>