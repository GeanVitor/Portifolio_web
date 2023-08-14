import React from 'react';
import './styleHeader.css';
import perfil from '../../public/perfil.png';
import instagram from '../../public/instagram.png';
import github from '../../public/github.png';
import linkedin from '../../public/linkedin.png';

const Header = () => {
    return(
        <div className='container'>
            <div className='logo'>
                <img src={perfil} alt=''/>
            </div>

            <div className='nav-bar'>
                <ul className='list'>
                    <a href='/'><li>Home</li></a>
                    <a href='/'><li>About</li></a>
                    <a href='/'><li>Portifolio</li></a>
                    <a href='/'><li>Blog</li></a>
                    <a href='/'><li>Contact</li></a>
                </ul>
            </div>
            <div>
                <div className='banner'>
                    <h1>Hi i am Gean Vitor!</h1>
                    <p>
                        Busco oportunidades que me permitam aplicar meu sólido conhecimento 
                        e paixão pela programação, com foco especial em tecnologias como React, 
                        Node.js e JavaScript. Meu objetivo é contribuir ativamente para projetos 
                        desafiadores, onde possa criar soluções inovadoras e impactantes, tanto no 
                        desenvolvimento front-end quanto no back-end.
                    </p>
                    <a href='https://instagram.com/gean_v.m?igshid=ZGUzMzM3NWJiOQ=='>
                        <img src={instagram} alt='' className='redes-sociais'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/gean-vitor-macedo-765a7a236'>
                        <img src={linkedin} alt='' className='redes-sociais'></img>
                    </a>
                    <a href='https://github.com/GeanVitor'>
                        <img src={github} alt='' className='redes-sociais'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;