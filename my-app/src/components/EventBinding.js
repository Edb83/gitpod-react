import React from "react";

// Ways to bind event handlers:
// define the handler as an arrow function (preferred)
// Arrow function in the render method (alternative)
// call .bind(this) on the handler
// bind the event handler in the constructor

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };

        // to bind event in the constructor:
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //         buttonText: "Enter",
    //     })
    // }

    // To bind event using an arrow function (preferable approach):
    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
        });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.introduction } { this.props.greeting }</h1>
                {/* To bind event in the render method (useful when parameters required) */}
                {/* <button onClick={this.handleClick.bind(this) }> */}
                <button onClick={this.handleClick}>
                    { this.state.buttonText }
                </button>
            </div>
        )
    }
}

export default EventBinding;