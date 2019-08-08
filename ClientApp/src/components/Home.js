import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import { actionCreators } from '../store/Home';

class Home extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Welcome to Category Words!</h1>
                <p>This is a simple yet fun word game. The idea is to guess as many words as you can to the related
                    topic chosen at the beginning of the game. The trick is you only have 30 seconds for each guess. If
                    you can't guess any more words your time is up! Good Luck!</p>
                <p>Please choose a category to start playing...</p>
            </div>
        )
    }
}

export default connect(
    state => state.categories,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
