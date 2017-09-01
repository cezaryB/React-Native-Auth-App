import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
           text: '' 
        }
    }
    saveInput(text) {
        this.setState({
            text
        });
        console.log(text);
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input value={this.state.text} label='email' onChangeText={text => this.saveInput(text)} />
                </CardSection>    
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>        
            </Card>    
        );
    }
}
