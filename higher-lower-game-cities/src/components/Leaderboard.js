import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import {fetchLeaderboard} from "../actions";

class Leaderboard extends React.Component {
    
    componentDidMount() {
        this.props.fetchLeaderboard();
    }

    

    renderLeaderBoard() {
        return this.props.leaderboard.map( (item, index) => {
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{item.username}</td>
                    <td className="right aligned">{item.score}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <h2 className="ui center aligned large header leaderboard-header">Rangliste</h2>
                <table class="ui inverted unstackable inverted table">
                <thead>
                    <tr>
                        <th className="gold-color">Rank</th>
                        <th>Spieler</th>
                        <th className="right aligned">Score</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderLeaderBoard()}
                </tbody>
                </table> 
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