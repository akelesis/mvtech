import React from 'react'
import Main from '../templates/Main'
import './Budget.css'

export default props =>
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
                    <input type="text" className="text-input" id="name" name="name" placeholder="Diga-nos seu nome" />
                    <input type="email" className="text-input" id="email" name="email" placeholder="Insira seu email" />
                </div>
                <div className="input-group">
                    <select type="text" className="select-budget" id="subject" name="subject">
                        <option value="">Selecione o tipo de serviço</option>
                        <option value="web">Site simples</option>
                        <option value="sistema gerenciamento">Sistema de gerenciamento empresarial</option>
                        <option value="e-commerce">Loja virtual</option>
                        <option value="mobile">Mobile</option>
                        <option value="mobile">Outros</option>
                    </select>
                </div>
                <div className="input-group">
                    <input type="text" className="text-input main-text-input" id="area" name="area" placeholder="Qual a area de atuação da sua empresa?"/>
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