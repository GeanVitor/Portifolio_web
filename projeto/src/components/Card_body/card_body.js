import React from 'react';
import './styleCard.css';
import dbs from '../../public/dbs.png';
import encriptacao from '../../public/encriptacao.png';
import react from '../../public/react.png';
import rede from '../../public/rede.png';
import operacao from '../../public/operacao.png';
import em_formacao from '../../public/em_formacao.png';

const CardBody = () => {
    return (
        <div>
            <h1 className='title'>Services</h1>
            <div className='card-container'>
                <ul className='items'>
                    <li className='cards'>
                        <img src={react} alt='' className='img'/>
                        <h2>Front-End</h2>
                        <p>
                            Conhecimentos em bootrap
                            reat/react-native
                            html e css
                        </p>
                    </li>
                    <li className='cards'>
                        <img src={encriptacao} alt='' className='img'/>
                        <h2>Back-End</h2>
                        <p>
                            Conhecimentos em JavaScript
                            Node.js
                            C# e python
                        </p>
                    </li>
                    <li className='cards'>
                        <img src={dbs} alt='' className='img'/>
                        <h2>Banco de Dados</h2>
                        <p>
                            Conhecimento em Bancos relacionais e não relacionais 
                            MySql
                            PostgreeSql
                            MongoDb
                        </p>
                    </li>
                </ul>
            </div>

            <div className='card-container'>
                <ul className='items'>
                    <li className='cards'>
                        <img src={rede} alt='' className='img'/>
                        <h2>Redes de Computadores</h2>
                        <p>
                            Conhecimentos em redes de Computadores
                            Estrutura da rede
                            e Organização da rede
                        </p>
                    </li>
                    <li className='cards'>
                        <img src={operacao} alt='' className='img'/>
                        <h2>Sistemas Operacionais</h2>
                        <p>
                            Conhecimentos em sistemas Operacionais
                            Windows e linux
                        </p>
                    </li>
                    <li className='cards'>
                        <img src={em_formacao} alt='' className='img'/>
                        <h2>Formações</h2>
                        <p>Formação em seguimento em
                            sistemas de informação
                            atualmente no 4º semestre
                        </p>
                    </li>
                </ul>
            </div> 
        </div>
    );
}

export default CardBody;
