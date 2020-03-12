import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import history from '../history';

class Credits extends React.Component {


    renderActions () {
        return (
            <React.Fragment> 
                
                <Link className="ui button inverted" to="/">Home</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        
        return (
            <div className="ui center aligned segment segment-credits">
                <div class="ui image label">
                <i class="bullhorn icon"></i>
                Alexej
                </div>
                <div class="ui image label">
                <i class="file alternate icon"></i>
                Finn und Martin
                </div>
                <div class="ui image label">
                <i class="pencil alternate icon"></i>
                Jakob & Torben
                </div>
                <div class="ui image label">
                <i class="save outline icon"></i>
                Karl & Sören
                </div>
                
            </div>
        )
    }

    render () {
        return (
            <Modal
                title="Credits"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => (null)}
            />

        );
    }
}

export default Credits;