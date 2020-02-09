import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import history from '../history';
import UserForm from './UserForm'

class UserDataModal extends React.Component {
    
    renderActions () {
        return (
            <React.Fragment> 
                <Link to="/" className="ui button" onClick={this.onClick}>home</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        
        return (
            <UserForm isSignedIn={this.props.isSignedIn}/>
        )
    }

    render () {
        return (
            <Modal
                title="Enter User Data"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />

        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn};
}


export default connect(mapStateToProps,  null )(UserDataModal);