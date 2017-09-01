import React from 'react';
import { TextInput, View, Text } from 'react-native';

function Input({ label, onChangeText, value }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput value={value} style={{ height: 20, width: 100 }} onChangeText={onChangeText}/>
        </View>    
    );
}

export { Input };