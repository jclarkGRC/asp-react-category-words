import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionCreators} from '../store/Home';

class Home extends React.Component {

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestCategories();
    }

    render() {
        let {categories} = this.props;
        const category = categories.map((category) => {
                return (
                    <option key={category.id}>{category.categoryName}</option>
                )
            }
        );
        return (
            <div>
                <h1>Welcome to Category Words!</h1>
                <p>This is a simple yet fun word game. The idea is to guess as many words as you can to the related
                    topic chosen at the beginning of the game. The trick is you only have 30 seconds for each guess. If
                    you can't guess any more words your time is up! Good Luck!</p>
                <p>Please choose a category to start playing...</p>
                <select>
                    {category}
                </select>
            </div>
        )
    }
}

export default connect(
    state => state.categories,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
