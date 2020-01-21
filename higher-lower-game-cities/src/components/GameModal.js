import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import history from '../../history';

class GameModal extends React.Component {
    
    

    renderActions () {
        return (
            <React.Fragment> 
                <Link to="/game" className="ui button">start new game</Link>
                <Link to="/" className="ui button">home</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        
        return 'You failed. Your score was '+this.props.score;
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


export default connect(mapStateToProps)(GameModal);