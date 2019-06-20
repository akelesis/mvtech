import React, {Component} from 'react'
import Main from '../templates/Main'
import axios from 'axios'
import './Budget.css'


const baseUrl = 'http://mvtechsolutions.com/quote'

const initialState = {
    message: {
        name: '',
        email: '',
        service: '',
        area: '',
        main: ''
    },
}


export default class Budget extends Component{

    state = { ...initialState }

    reset = () =>{
        this.setState({message: initialState.message})
    }

    send = () => {
        const message = this.state.message
        const url = baseUrl
        console.log(message)
        axios.post(url, message)
            .then(this.reset())
            .then(alert('Solicitação enviada com sucesso! Em breve entraremos em contato!'))
    }

    updateField(event) {
        const message = { ...this.state.message }

        message[event.target.name] = event.target.value
        this.setState({ message })
    }

    render(){
        return(
            <Main>
                <div className="contact-header">
                    <h1>Chegou o grande momento!</h1>
                    <p>
                        Diga-nos quais os planos para a sua empresa e rapidamente analisaremos as melhores soluções e os melhores preços para colocá-los em prática! 
                    </p>
                </div>
        
                <div className="form-budget">
                    <form action="" method="post">
                        <div className="input-group">
                            <input type="text" className="text-input" id="name" name="name" placeholder="Diga-nos seu nome" onChange={e => this.updateField(e)} />
                            <input type="email" className="text-input" id="email" name="email" placeholder="Insira seu email" onChange={e => this.updateField(e)}/>
                        </div>
                        <div className="input-group">
                            <select type="text" className="select-budget" id="service" name="service" onChange={e => this.updateField(e)}>
                                <option value="">Selecione o tipo de serviço</option>
                                <option value="web">Site simples</option>
                                <option value="sistema gerenciamento">Sistema de gerenciamento empresarial</option>
                                <option value="e-commerce">Loja virtual</option>
                                <option value="mobile">Mobile</option>
                                <option value="mobile">Outros</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <input type="text" className="text-input main-text-input" id="area" name="area" placeholder="Qual a area de atuação da sua empresa?" onChange={e => this.updateField(e)}/>
                        </div>
        
                        <div className="input-group">
                            <textarea name="main" id="main-text" cols="30" rows="10" className="main-text-input" placeholder="Se possivel, forneça alguns detalhes sobre a sua necessidade..." onChange={e => this.updateField(e)}></textarea>
                        </div>
                        <div className="input-group">
                            <button type="button" className="contact-forwards" onClick={this.send.bind()}>Enviar!</button>
                        </div>
        
                    </form>
                </div>
            </Main>
        )
    }
}
    