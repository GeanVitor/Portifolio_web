import React from 'react';
import Header from '../../components/Header/header';
import AboutMe from '../../components/AboutMe/abouteMe';
import CardBody from '../../components/Card_body/card_body';
//import Postifolio from '../portifolio/postifolio';
import './styleHome.css';

const Home = () => {
    return(
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <CardBody></CardBody>
        </div>
    )
}

export default Home;