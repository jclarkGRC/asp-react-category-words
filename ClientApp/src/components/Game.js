import React from 'react';
import CountdownTimer from './CountdownTimer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Home';

const Game = props => {
    console.log(props);

    return(
        <div>
            <div style={{ float: "left" }}> 
                <h1>Category Words</h1>
                <p>Current Category is: {props.currentCategory}</p>
                <CountdownTimer
                    secondsLeft={30}
                />
                <p>Score: </p>
                <p>Current Word: </p>
                <p>Guess a word that starts with: </p>
                <input id="currentWord"></input>
                <input type="submit" value="submit" />
            </div>
            <div style={{ float: "right" }}>
                <h3>Used words list...</h3>
                <ul>

                </ul>
            </div>
        </div>
    )
};

export default connect(
  state => state.categories,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Game);
