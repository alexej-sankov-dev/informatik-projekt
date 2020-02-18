import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth'


class Home extends React.Component{
    

    render() {
        return (
            <div className="ui menu">
                <div className="ui right menu">
                 <GoogleAuth /> 
                </div>

               Home

               <Link to="/game">
                    <button>start game</button>
                </Link>
            </div>
        );
    }
}

export default Home;