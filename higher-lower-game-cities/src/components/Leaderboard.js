import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import {fetchLeaderboard} from "../actions";

class Leaderboard extends React.Component {
    
    componentDidMount() {
        this.props.fetchLeaderboard();
    }

    renderList() {
        return this.props.leaderboard.map( (item, index) => {
            return (
                <div className="item" key={index}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <div className="header">Platz: {index}</div>
                        <div className="description">{item.username}</div>
                        <div className="price">Score: {item.score}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Leaderboard</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        leaderboard: Object.values(state.leaderboard),
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {fetchLeaderboard})(Leaderboard);