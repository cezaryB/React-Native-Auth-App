import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
           email: '',
           password: '',
           error: '',
           loading: false 
        };
    }
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({
            error: '',
            loading: true
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(err => {
           this.setState({
            error: err.message,
            loading: false
           });
           firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
               this.setState({
                   loading: false
               });
               console.log(result);
           })
           .catch(err => {
                this.setState({
                    error: err.message,
                    loading: false
                });
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
    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }
        else return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
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
                    {this.renderButton()}
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