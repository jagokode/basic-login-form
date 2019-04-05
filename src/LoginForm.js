import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '' 
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  handleSubmit = event => {
    console.log('Submitting')
    console.log(this.state)
  }

  render() {
    const { email, password } = this.state 

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default LoginForm