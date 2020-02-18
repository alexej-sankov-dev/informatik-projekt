import React from 'react';

class ScoreBar extends React.Component {

    renderHighScore = () => {
        if(this.props.isSignedIn) {

            return(
                <div className="score-bar-highscore">
                    Highscore: {this.props.highscore}
                </div>
            )
        }
    }
    render() {
        return (
            <div className="score-bar">
                {this.renderHighScore()}
                <div className="score-bar-score">
                Score: {this.props.score}
                </div>
            </div>
        )
    }
}

export default ScoreBar;