import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperation } from '../redux/auth';


class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1 className='title-login'>Register page</h1>

        <form
          onSubmit={this.handleSubmit}
          className='login_form'
          autoComplete="off"
        >
          <label >
            Name
            <input
              className='login_input'
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label >
            Email
            <input
              className='login_input'
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label >
            Password
            <input
              className='login_input'
              type="password"
              name="password"
              placeholder="Enter password at least seven symbol"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className='login-bth' type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperation.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
