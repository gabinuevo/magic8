import React, { Component } from 'react';

class EightBall extends Component {
    static defaultProps = {
        msg: "Think of a question",
        color: "black"
    }
    constructor(props) {
        super(props);
        this.state = this.props
    }
    render() {
        const answers = this.props.answers;
        const randIdx = Math.floor(Math.random() * answers.length)
        const randAnswer = answers[randIdx]
        return (
        <div className="ball">
            <p>{randAnswer.msg}</p>
        </div>
        );
    }
}

export default EightBall;
