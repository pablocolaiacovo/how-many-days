import React from 'react'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    const { isAuthenticated } = this.props.auth;
    var status = isAuthenticated();
    this.setState({
      loggedIn: status
    })
  }

  handleLogin() {
    if (!this.state.loggedIn) {
      this.props.auth.login();
    }
    else {
      this.props.auth.logout();
    }
  }

  render() {
    return (
      <div className="right item">
        {
          !this.state.loggedIn && (
            <a className="ui inverted button" onClick={this.handleLogin}>Log in</a>
          )
        }
        {
          this.state.loggedIn && (
            <a className="ui inverted button" onClick={this.handleLogin}>Log out</a>
          )
        }
      </div>
    )
  }
}

export default Login;
