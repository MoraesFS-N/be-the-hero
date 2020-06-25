import React from 'react';
import logoImage from '../../assets/logo.svg';
import './styles.css'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../../global.css';

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na palataforma e ajude pessoas
                        a encontrarem os casos de sua ONG. 
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" /> Voltar para Login </Link>
                </section>
                <form action="">
                    
                    <input placeholder="Nome da Ong" />
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}