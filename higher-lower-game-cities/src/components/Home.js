import React from 'react';
import {Link} from 'react-router-dom';
import Leaderboard from './Leaderboard'
import Header from './Header';
import {connect} from 'react-redux';


class Home extends React.Component{
    
    renderChangeUsername() {
        if(this.props.isSignedIn) {
            return (
                <Link className="ui button" to="/userDataModal">
                    Nutzernamen ändern
                </Link>
            )
        }
    }

    render() {
        return (
            <div>
            <Header />
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
                        <div className="ui center aligned column">
                            <div className="leaderboard">
                                <Leaderboard />
                                <Link to="credits">
                                <button class="ui button credits-button">
                                    <i class="user icon"></i>
                                    Credits
                                </button>
                                </Link>
                                {this.renderChangeUsername()}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, null)(Home);