import React from 'react'
import './Home.css';
import logo from '../../assets/logo-no-background.png';
import Boards from '../../components/homecomponents/Boards';

const Home = () => {
    return (
        <div className='home'>
            <div className="home_sidebar">
                <div className='logo_cont'>
                    <img src={logo} width='100px' />
                </div>
                <div className="home_myboard">
                    My Board
                </div>
            </div>
            <Boards />
        </div>
    )
}

export default Home