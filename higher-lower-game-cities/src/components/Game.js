import React from 'react';
import {connect} from 'react-redux';
import {fetchCities, handleGuess} from '../actions';
import history from '../history';

function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

class Game extends React.Component {

    onClickMore = () => {
        var populationFirst = this.props.cities[0].population 
        var populationSecond = this.props.cities[1].population
        
        if(populationFirst<populationSecond) {
            this.props.handleGuess(true)
            setTimeout(function(){ this.props.fetchCities() }, 2000);
        } else {
            this.props.handleGuess(false)
            setTimeout(function(){ history.push('/gamemodal') }, 2000);
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

    renderScoreBar() {
        return (
            <div className="score-bar">
                <div className="score-bar-score">
                Score: {this.props.score}
                </div>
            </div>
        )
    }

    renderVersusBlock() {
        var test = null
        if(this.props.roundState == null) {
            test = "vs"
        }
        if(this.props.roundState == "true") {
            test = <img className="versus-block-image" src="https://image.flaticon.com/icons/svg/2089/2089713.svg"/>
        }
        if(this.props.roundState =="false") {
            test = <img className="versus-block-image" src="https://image.flaticon.com/icons/svg/2089/2089733.svg"/>
        }
        return (
            <div>
                <div className={`versus-block versus-block-${this.props.roundState}`}>
                    <div className="versus-block-text">{test}</div>
                    <div className="versus-block-overlay"></div>
                    <div className="versus-block-icon"></div>
                </div>
            </div>
        )
    }

    renderFirstCity() {
        var population = this.props.cities[0].population
        return(
            <div className="city first-city">
                <div className="city-wrapper">
                    <div className="city-name">
                        <p className="city-name-text">
                            {this.props.cities[0].name}
                        </p>
                        <p className="city-country-text">
                            in {this.props.cities[0].country}
                            </p>
                        <p>hat</p>

                    </div>
                    <div className="city-population">
                        <p className="city-population-text">
                            {numberWithDots(population)}
                        </p>
                        <p>Einwohner</p>  
                    </div>
                </div>
            </div>
        )
    }

    renderSecondCity() {
        var hiddenClass = null
        if(this.props.roundState == null) {
            hiddenClass = "city-population-hidden"
        } else {
            hiddenClass = "city-population animation-slide-up-reveal"
        }
        return(
            <div className="city second-city">
                <div className="city-wrapper">
                    <div className="city-name">
                        <p className="city-name-text">
                            {this.props.cities[1].name}
                        </p>
                        <p className="city-country-text">
                           in {this.props.cities[1].country}
                        </p>
                        <p>hat</p>

                    </div>
                    <div className={`${hiddenClass}`}>
                        <p className="city-population-text">
                            {numberWithDots(this.props.cities[1].population)}
                        </p>
                        <p>Einwohner</p>  
                    </div>
                </div>
            </div>

        )
    }

    renderCities() {
        return (
            <div className="game-scroller">
                {this.renderFirstCity()}
                {this.renderSecondCity()}
            </div>

        )
    } 

    render() {
        return (
            <div className="game-container"  style = {{height:"100vh"}}>
               {this.renderCities()}
               {this.renderScoreBar()}
               {this.renderVersusBlock()}
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