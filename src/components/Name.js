import React, { Component } from 'react'
import Submit from './Submit'
class Name extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      number: '',
      message:''

    }
  }
  handleSubmit = (event) => {
    console.log(`Name = ${this.state.name}`)
    console.log(`Email = ${this.state.email}`)
    console.log(`Number = ${this.state.number}`)
    console.log(`Message = ${this.state.message}`)
    event.preventDefault()
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleNumberChange = (event) => {
    this.setState({
      number: event.target.value
    })
  }
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name : </label>
          <input type='text'
            value={this.state.name}
            onChange={this.handleNameChange} />
        </div>
        <div>
          <label>E-Mail : </label>
          <input type="email"
            value={this.state.email}
            onChange={this.handleEmailChange} />
        </div>
        <div>
          <label>Contact Number : </label>
          <input type='number'
            value={this.state.number}
            onChange={this.handleNumberChange} />
        </div>
        <div>
          <label>Message : </label>
          <input type='text'
            value={this.state.message}
            onChange={this.handleMessageChange} />
        </div>
        <Submit />
      </form>
    )
  }
}

export default Name