import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {actionCreators} from '../store/Home';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           selectedCategory: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ selectedCategory: event.target.value })       
    }

    handleSubmit(event) {
        let selectedCategory = this.state.selectedCategory;

        if (selectedCategory === "") {
            alert("Please choose a category...");
        }
        else {
            alert("You selected: " + selectedCategory);
            // TODO: save current category into redux
            this.props.saveCurrentCategory(this.state.selectedCategory);
            this.props.history.push("/game");
        }
        event.preventDefault();
    }

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestCategories();
    }

    render() {

        console.log(this.props);
        let { categories } = this.props;
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
                <h4>Please choose a category to start playing...</h4>
                    <form onSubmit={this.handleSubmit}>
                    <select value={this.state.selectedCategory} onChange={this.handleChange}>
                        {category}
                    </select>
                    <br />
                    <input style={{ marginTop: 10 }} type={"submit"} value={"Submit"} />
                </form>
            </div>
        )
    }
}

export default connect(
    state => state.categories,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
