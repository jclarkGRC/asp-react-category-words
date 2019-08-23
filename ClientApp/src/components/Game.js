import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Home';

const Game = props => {
    console.log(props);

    return(
        <div>
            <h1>Category Words</h1>
            <p>Current Category is: {props.currentCategory}</p>
        </div>
    )
};

export default connect(
  state => state.categories,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Game);
