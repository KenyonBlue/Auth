import React, { Component } from 'react';
import {Alert, Button, Card, CardSection} from './common';

class LoginForm extends Component {
    render() {
        return (
           
            <Card>
                <CardSection/>
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