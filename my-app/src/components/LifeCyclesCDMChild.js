import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

  constructor(props) {
    console.log('CHILD Constructor Called')
    super(props)

    this.state = {
      data: 'CHILD Loading...',
    }
  }

  getData() {
    console.log('CHILD getData() called')
    setTimeout(() => {
      console.log('CHILD Data fetched!')
      this.setState({
        data: 'CHILD Loaded!'
      })
    }, 3000)
  }

  componentDidMount() {
    console.log('CHILD Component mounted')
    this.getData();
  }


  render() {
    console.log('CHILD Render method called')
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

export default LifeCyclesCDMChild