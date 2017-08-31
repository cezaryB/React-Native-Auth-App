import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class LoginForm extends Component {
    render() {
        return(
            <Card>
                <CardSection />
                <CardSection />
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>    
            </Card>    
        );
    }
}

