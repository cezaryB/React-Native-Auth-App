import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from './components/common';

export default class Application extends Component {
    render() {
        return (
            <View>
                <Header title="Auth app" />
            </View>    
        );
    }
}