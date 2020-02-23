import React from 'react';
import {connect} from 'react-redux';
import {fetchCities, handleGuess, updateHighscore, fetchLeaderboard} from '../actions';
import history from '../history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import VersusBlock from './VersusBlock';
import ScoreBar from './ScoreBar';
import FirstCity from './FirstCity';
import SecondCity from './SecondCity';


class Game extends React.Component {

    onClickMore = () => {
        var populationFirst = this.props.cities[0].population 
        var populationSecond = this.props.cities[1].population
        
        if(populationFirst<populationSecond) {
            this.props.handleGuess(true)
            setTimeout(() => { this.props.fetchCities() }, 2000);
        } else {
            this.props.handleGuess(false)
            this.props.updateHighscore(this.props.auth.userId, this.props.score)
            setTimeout(() => { history.push('/gamemodal') }, 2000);
        }
    }

    onClickLess = () => {
        var populationFirst = this.props.cities[0].population 
        var populationSecond = this.props.cities[1].population
        
        if(populationFirst>populationSecond) {
            this.props.handleGuess(true)
            setTimeout(() => { this.props.fetchCities() }, 2000);
        } else {
            this.props.handleGuess(false)
            this.props.updateHighscore(this.props.auth.userId, this.props.score)
            setTimeout(function(){ history.push('/gamemodal') }, 2000);
        }
    }

    componentDidMount = () => {
        this.props.fetchCities();
        this.props.fetchLeaderboard();
        
    }

    renderActions() {
        if(this.props.roundState==null) {
            return(
                <div className="game-actions">
                    <button className="game-button game-actions-button game-actions-button-higher" onClick={this.onClickMore}>
                    Mehr
                    </button>
                    <button className="game-button game-actions-button game-actions-button-lower" onClick={this.onClickLess}>
                    Weniger
                    </button>
                    <p>Einwohner als {this.props.cities[0].name}</p>
                </div>
            )
        }
    }
    
    renderCities() {
        var key1 = Math.floor(Math.random() * 10000)
        var citiesClasses = 'game-scroller'
        if(this.props.roundState == null) {
            citiesClasses = 'game-scroller fade-animation'
        }
        return (
            
                <div key={key1} className={citiesClasses}>
                    <FirstCity roundState={this.props.roundState} city={this.props.cities[0]}/>
                    <SecondCity roundState={this.props.roundState} city={this.props.cities[1]}/>
                </div>
        )
    } 

    render() {
        return (
            <div className="game-container"  style={{height:"100vh"}}>
               {this.renderCities()}
               <ScoreBar score={this.props.score} highscore={this.props.auth.highscore} isSignedIn={this.props.auth.isSignedIn}/>
                <VersusBlock roundState={this.props.roundState}/>
               {this.renderActions()}
               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.game.cities,
        score: state.game.score,
        roundState: state.game.roundState,
        auth: state.auth
    }
}

export default connect(mapStateToProps, {fetchCities, handleGuess, updateHighscore, fetchLeaderboard})(Game);