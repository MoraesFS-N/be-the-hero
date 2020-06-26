import React from 'react';
import logoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 
import './styles.css';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImage} alt="Be The Hero"/>
                <h1>Cadastrar novo casos</h1>
                <p>
                    Descreva o caso detalhadamente para encontrar um
                    herói para resolver isso.
                </p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" /> Voltar para Home </Link>
            </section>
            <form action="">
                
                <input placeholder="Título do caso" />
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em Reais" />
                
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}