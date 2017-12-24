import * as React from 'react';

import LoginForm from '../forms/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

interface LoginPageProps {
  history: any;
  login: any;
}

class LoginPage extends React.Component<LoginPageProps, any> {
  submit = (data: any) => {
    console.log(data);
    return this.props.login(data).then(() => this.props.history.push('/'));
  }
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);