import React, { Component } from 'react';
import { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {

    state = { email: '' };

    render() {
        return (
           
            <Card>
                <CardSection>
                    <Input 
                    placeholder="user@gmail.com"
                    label="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    />
                </CardSection>
                <CardSection/>
                <CardSection>
                <Button onPress={() => console.log('hey now')}>
                    Login
                </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;