import React from 'react';
import './abouteStyle.css';

const AboutMe = () => {
    return(
        <div className='about-container'>
            <h1>About Me</h1>
            <div className='sobre'>
                <small>FullStack Developer</small>
                <p>
                Busco oportunidades para crescer como desenvolvedor fullstack, 
                focado em React, Node.js e JavaScript. Quero aprimorar minhas 
                habilidades na criação de interfaces interativas com React, 
                enquanto também me especializo no desenvolvimento do lado do servidor com Node.js. 
                Tenho o objetivo de contribuir para projetos desafiadores, aprender com equipes 
                experientes e construir soluções inovadoras.
                </p>
                <div className='button'>
                    <a href='/'><p>Download Cv</p></a> 
                </div>
            </div>
            <div className='contatos'>
                <p>Birtday  : Fev 07,2004</p>
                <p>Telefone : (61) 996230824</p>
                <p>Email    : geanv7820@gmail</p>
                <p>From     : Iesgo , BSI</p>
                <p></p>

            </div>
        </div>
    )
}

export default AboutMe;