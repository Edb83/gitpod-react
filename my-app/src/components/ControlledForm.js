import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
        }
    }

    handleInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input
                        value={this.state.name}
                        id='id-name'
                        name='name'
                        type='text'
                        onChange={this.handleInput}
                        />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default ControlledForm
