import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import history from '../history';
import { startNewGame } from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
            <ReactCSSTransitionGroup
	            	transitionName="city"
	            	transitionEnterTimeout={500}
	            	transitionLeaveTimeout={300}>
            <div key="13">Hello this is a text</div>
            </ReactCSSTransitionGroup>
        )
    }

    render () {
        return (
            <Modal
                title="Login"
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