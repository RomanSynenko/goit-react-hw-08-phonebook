import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperation } from '../redux/auth';


class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className='title-login'>Login page</h1>

        <form
          className='login_form'
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
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
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className='login-bth' type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperation.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
