import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log('CHILD constructor(props)');
        super(props)

        this.state = {
            greeting: 'CHILD Hello!',
        }
    }

    updateGreeting = () => {
        console.log('CHILD updateGreeting()');
        this.setState((prevState) => {
            return {
                greeting: prevState.greeting === 'CHILD Hello!' ? 'CHILD Goodbye' : 'CHILD Hello!',
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('CHILD componentDidUpdate()');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('PARENT greeting has changed!');
        }
    }

    render() {
        console.log('CHILD render()');
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Child Greeting</button>
            </div>
        )
    }
}

export default LifeCyclesCDUChild