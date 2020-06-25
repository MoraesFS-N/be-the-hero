import React from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero"/>
            
                <form action="">
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" type="text"/>
                    <button type="submit" className="button"  >Entrar</button>
                    <a href="/register"> <FiLogIn  size={16} color="#e02041" /> Não tenho cadastro</a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}