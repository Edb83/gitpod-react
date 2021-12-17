import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('constructor(props)')
        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }

    updateGreeting = () => {
        console.log('updateGreeting()')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye" : "Hello!"
            }
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()')
    }
    
    render() {
        console.log('render()')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
                
            </div>
        )
    }
}

export default LifeCyclesCDU