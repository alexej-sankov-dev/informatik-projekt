import React from 'react';
import {connect} from 'react-redux';
import {fetchCities, handleGuess} from '../actions';
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
            setTimeout(function(){ history.push('/gamemodal') }, 2000);
        }
    }

    componentDidMount = () => {
        this.props.fetchCities();
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
        return (
            <ReactCSSTransitionGroup
	            	transitionName="city"
	            	transitionEnterTimeout={500}
	            	transitionLeaveTimeout={500}>
                <div key={this.props.cities[1].id} className="game-scroller">
                    <FirstCity roundState={this.props.roundState} city={this.props.cities[0]}/>
                    <SecondCity roundState={this.props.roundState} city={this.props.cities[1]}/>
                </div>
            </ReactCSSTransitionGroup>
        )
    } 

    render() {
        return (
            <div className="game-container"  style={{height:"100vh"}}>
               {this.renderCities()}
               <ScoreBar score={this.props.score} />
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
        roundState: state.game.roundState
    }
}

export default connect(mapStateToProps, {fetchCities, handleGuess})(Game);