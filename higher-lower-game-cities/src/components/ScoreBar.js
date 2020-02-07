import React from 'react';

class ScoreBar extends React.Component {
    render() {
        return (
            <div className="score-bar">
                <div className="score-bar-score">
                Score: {this.props.score}
                </div>
            </div>
        )
    }
}

export default ScoreBar;