import React, { Component } from 'react'
import Main from '../templates/Main'
import './ContactUs.css'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/contact'

const initialState = {
    message: {
        name: '',
        email: '',
        subject: '',
        main: ''
    },
}

export default class ContactUs extends Component {
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
            .then(alert('Mensagem enviada com sucesso!'))
    }

    updateField(event) {
        const message = { ...this.state.message }

        message[event.target.name] = event.target.value
        this.setState({ message })
    }



    render() {
        return (
            <Main>
                <div className="contact-header">
                    <h1>Conte-nos tudo!</h1>
                    <p>
                        Aqui você tem um contato aberto conosco, sem compromisso! Conte-nos o que deseja para sua empresa, tire dúvidas ou nos dê alguma sugestão!
                    </p>
                </div>
                <div className="form-contact">
                    <form action="" method="post">
                        <div className="input-group">
                            <input type="text" className="text-input" id="name" name="name" placeholder="Diga-nos seu nome" onChange={e => this.updateField(e)}/>
                            <input type="email" className="text-input" id="email" name="email" placeholder="Insira seu email" onChange={e => this.updateField(e)}/>
                        </div>
                        <div className="input-group">
                            <input type="text" className="text-input text-input-subject" id="subject" name="subject" placeholder="Diga-nos sobre o que quer falar" onChange={e => this.updateField(e)}/>
                        </div>

                        <div className="input-group">
                            <textarea name="main" id="main-text" cols="30" rows="10" className="main-text-input" placeholder="Digite aqui a sua mensagem!" onChange={e => this.updateField(e)}/>
                        </div>
                        <div className="input-group">
                            <button className="contact-forwards" type="button" onClick={this.send.bind()}>Enviar!</button>
                        </div>

                    </form>
                </div>
            </Main>
        )
    }
}
