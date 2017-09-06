import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';



export default class Application extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: null
        }
    }
    componentWillMount() {
          const config = {
            apiKey: 'AIzaSyCeC95na9WgcwaYqxzzbpXOVUQijPs1jWY',
            authDomain: 'auth-app-a6b29.firebaseapp.com',
            databaseURL: 'https://auth-app-a6b29.firebaseio.com',
            projectId: 'auth-app-a6b29',
            storageBucket: 'auth-app-a6b29.appspot.com',
            messagingSenderId: '330731995281'
            };
            firebase.initializeApp(config);
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    return this.setState({
                        loggedIn: true,
                    });
                }
                return this.setState({
                    loggedIn: false
                });
            });
    }
    signOut() {
        firebase.auth().signOut();
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (<CardSection>
                    <Button onPress={this.signOut.bind(this)}>Log out</Button>
                </CardSection>);
            case false:
                return <LoginForm />;
            default:
                return (<CardSection>
                    <Spinner />
                </CardSection>);          
        }
    }
    render() {
        return (
            <View>
                <Header title="Auth app" />
                {this.renderContent()}
            </View>    
        );
    }
}