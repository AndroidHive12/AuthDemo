import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry ={false}
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
      <CardSection>
        <Input
          secureTextEntry ={true}
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          style={{ height: 20, width: 100 }}
        />
      </CardSection>
      <CardSection>
        <Button >
          Log in
        </Button>
      </CardSection>
     </Card>
      );
  }
}


export default LoginForm;
