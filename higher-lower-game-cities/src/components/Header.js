import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import GoogleAuth from './GoogleAuth';

class Header extends React.Component{

    render() {
        return (
            <div className="ui secondary pointing menu">
                <div className="right menu">
                    <GoogleAuth />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUserId: state.auth.userId
    };
};



export default connect(mapStateToProps)(Header);