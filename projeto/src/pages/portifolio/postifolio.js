import React from 'react';
import icone from '../../public/icon.png'
import './postifolioStyle.css';

const Postifolio = () => {
    return(
        <div className='container'>
            <div className='header'> 
                <div className='img-perfil'>
                    <img src={icone} alt=''></img>
                </div>
                <div className='dados-pessois'>
                    <ul>
                        <li>nome</li>
                        <li>Telefone</li>
                        <li>Email</li>
                        <li>Endereço</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Postifolio;