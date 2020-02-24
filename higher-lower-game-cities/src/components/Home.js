import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth'


class Home extends React.Component{
    

    render() {
        return (
            <div className="home-background">
                <div className="centeredButton">
                    Higher Lower Game
                    <br></br>
                    <Link to="/game">
                        <button>start game</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;