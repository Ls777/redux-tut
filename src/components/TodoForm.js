import React, { Component } from 'react'
import { connect } from 'react-redux'
import {saveTodo} from '../reducers/todo'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {input: ""}
  }

  handleChange = e => this.setState({ input: e.target.value})
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveTodo(this.state.input)
    this.setState({input: ""})
  }


  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input 
        type="text" 
        value={this.state.input}
        onChange={this.handleChange}
      />
    </form>
    )
  }
}

export default connect(
  null,
  { saveTodo }
)(TodoForm)