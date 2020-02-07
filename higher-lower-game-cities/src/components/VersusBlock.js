import React from 'react';

class VersusBlock extends React.Component {
    render() {
        var elem = null
        if(this.props.roundState == null) {
            elem = "vs"
        }
        if(this.props.roundState == "true") {
            elem = <img className="versus-block-image" src="https://image.flaticon.com/icons/svg/2089/2089713.svg"/>
        }
        if(this.props.roundState =="false") {
            elem = <img className="versus-block-image" src="https://image.flaticon.com/icons/svg/2089/2089733.svg"/>
        }
        return (
            <div>
                <div className={`versus-block versus-block-${this.props.roundState}`}>
                    <div className="versus-block-text">{elem}</div>
                    <div className="versus-block-overlay"></div>
                    <div className="versus-block-icon"></div>
                </div>
            </div>
        )
    }
}

export default VersusBlock