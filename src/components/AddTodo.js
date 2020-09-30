import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    title: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Add Todo ...'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          value='Submit'
          type='submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
