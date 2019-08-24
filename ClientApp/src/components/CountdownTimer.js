import React from 'react';

class CountdownTimer extends React.Component {

    countDownDate = new Date();

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.secondsLeft
        }
        this.countDownByOneSecond = this.countDownByOneSecond.bind(this);
        this.countDownDate.setSeconds(this.countDownDate.getSeconds() + this.props.secondsLeft)
        let x = setInterval(this.countDownByOneSecond, 1000);
        if (this.state.secondsLeft < 0) {
            clearInterval(x);
        }
    }

    countDownByOneSecond() {
        let now = new Date().getTime();
        let distance = this.countDownDate - now;
        let seconds = Math.floor((distance % (1000 * 30)) / 1000);
        this.setState({ secondsLeft: seconds })
    }

    render() {

        if (this.state.secondsLeft < 0) {
            return (
                <p>Time's up!</p>
            )
        }
        else {
            return (
                <p> {this.state.secondsLeft} Seconds left.</p>
            )
        }
        
    }
}

export default CountdownTimer;