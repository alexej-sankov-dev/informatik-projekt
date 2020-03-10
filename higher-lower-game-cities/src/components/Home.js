import React from 'react';
import {Link} from 'react-router-dom';
import Leaderboard from './Leaderboard'


class Home extends React.Component{
    

    render() {
        return (
            <div className="home-background" style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow-City_%2836211143494%29.jpg)`}}>
                <div>
                    <div className="ui stackable two column grid">
                        
                        <div className="ui center aligned column">
                            <div className="segment-main">
                            
                                <div className="row">
                                    <img className="center-logo" src="logo3-white.png"/>

                                </div>
                                <div className="row">
                                    <Link className="play-button" to="/game">
                                        <button className=" massive ui inverted grey labeled icon button"> 
                                        <i className="play icon"></i>
                                        PLAY
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="leaderboard">
                                <Leaderboard />

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Home;