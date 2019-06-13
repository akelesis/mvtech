import React from 'react'
import Main from '../templates/Main'
import './ContactUs.css'

export default props =>
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
                    <input type="text" className="text-input" id="name" name="name" placeholder="Diga-nos seu nome" />
                    <input type="email" className="text-input" id="email" name="email" placeholder="Insira seu email" />
                </div>
                <div className="input-group">
                    <input type="text" className="text-input text-input-subject" id="subject" name="subject" placeholder="Diga-nos sobre o que quer falar" />
                </div>

                <div className="input-group">
                    <textarea name="main-text" id="main-text" cols="30" rows="10" className="main-text-input" placeholder="Digite aqui a sua mensagem!"></textarea>
                </div>
                <div className="input-group">
                    <button className="contact-forwards">Enviar!</button>
                </div>

            </form>
        </div>
    </Main>