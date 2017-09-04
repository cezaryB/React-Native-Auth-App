import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
           email: '',
           password: '',
           error: '' 
        };
    }
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({
            error: ''
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(err => {
           console.log(err);
           this.setState({
            error: err.message
           });
           firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
               console.log(result);
           })
           .catch(err => {
                console.log(err);
                this.setState({
                    error: err.message
                });
                console.log(this.state.error);  
           });
        });
    }
    saveEmail(email) {
        this.setState({
            email
        });
        console.log(email);
    }
    savePassword(password) {
        this.setState({
            password
        });
        console.log(this.state.password);
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    value={this.state.email} 
                    label='email' 
                    onChangeText={email => this.saveEmail(email)} 
                    placeholder='Type your email' 
                    />
                </CardSection>    
                <CardSection>
                    <Input
                    secureTextEntry
                    value={this.state.password} 
                    label='password' 
                    onChangeText={password => this.savePassword(password)} 
                    placeholder='Type your password'
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>    
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
                </CardSection>        
            </Card>    
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});