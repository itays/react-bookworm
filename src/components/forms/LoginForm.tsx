import * as React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import * as Validator  from 'validator';
import InlineError from '../messages/InlineError';
interface Props {
  submit: any;
}
class LoginForm extends React.Component<Props, object> {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = (e: any) => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (errors === undefined) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch((err: any) => {
        return this.setState({errors: err.response.data.errors, loading: false});
      });
    }
  }
  validate = (data: any) => {
    const errors: any = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = 'Invalid email';
    }
    if (!data.password) {
      errors.password = 'Cant be blank';
      return errors;
    }
  }
  render() {
    const {data, loading} = this.state;
    const errors: any = this.state.errors;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors && errors.global && <Message negative={true}>
          <Message.Header>Something went wrong</Message.Header>
          <p>{errors.global}</p>
        </Message>}
        <Form.Field error={!!errors && errors.email}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="example@example.com" 
            value={data.email} 
            onChange={this.onChange}
          />
          {errors && errors.email && <InlineError text={errors.email}/>}
        </Form.Field>
        <Form.Field error={!!errors && errors.password}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={data.password} 
            onChange={this.onChange}
          />
          {errors && errors.password && <InlineError text={errors.password}/>}
        </Form.Field>
        <Button primary={true}>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;