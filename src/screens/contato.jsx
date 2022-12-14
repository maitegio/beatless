import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../lib/styles";
import * as React from 'react';
import { Button } from 'react-native-paper';

export const Login = () => {
    const [text, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                label="email"
                mode="outlined"
                value={text}
                onChangeText={(emailDigitado) => setEmail(emailDigitado)} />

            <TextInput
                style={styles.input}
                label="senha"
                mode="outlined"
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <MyComponent />
        </View>
    );
};

const MyComponent = () => (
    <Button color="#000000" icon="apple" mode="contained" onPress={() => console.log('Pressed')}>
        cadastrar
    </Button>
);

export default MyComponent;
