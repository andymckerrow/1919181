import React, { Component } from 'react'

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: ''
  }

  onSubmitted = e => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    const { firstName, lastName, email } = this.state

    return (
      <form onSubmit={this.onSubmitted}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required value={firstName}  onChange={e => this.setState({ firstName: e.target.value  })} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={lastName}  onChange={e => this.setState({ lastName: e.target.value  })} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email}  onChange={e => this.setState({ email: e.target.value  })} />
        </div>
        <div>
          <button id="contact-button" type="submit">Contact</button>
        </div>
      </form>
    )
  }
}

export default App