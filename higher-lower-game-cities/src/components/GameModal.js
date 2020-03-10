import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import history from '../history';
import { startNewGame } from '../actions'
import Leaderboard from './Leaderboard'

class GameModal extends React.Component {
    
    onClick = () => {
        this.props.startNewGame()
    }    

    renderActions () {
        return (
            <React.Fragment> 
                <Link to="/game" className="ui button" onClick={this.onClick}>start new game</Link>
                <Link to="/" className="ui button" onClick={this.onClick}>home</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        
        //return 'You failed. Your score was '+this.props.score;
        return (
            <Leaderboard />
        )
    }

    render () {
        return (
            <Modal
                title={`Game Over! Dein Score war: ${this.props.score}`}
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />

        );
    }
}

const mapStateToProps = state => {
    return { score: state.game.score};
}


export default connect(mapStateToProps, { startNewGame })(GameModal);