import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {input: ""}
  }

  handleChange = e => this.setState({ input: e.target.value})
  
  render() {
    return (
    <form>
      <input 
        type="text" 
        value={this.state.input}
        onChange={this.handleChange}
      />
    </form>
    )
  }
}