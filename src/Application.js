import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


export default class Application extends Component {
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
    }
    render() {
        return (
            <View>
                <Header title="Auth app" />
            </View>    
        );
    }
}