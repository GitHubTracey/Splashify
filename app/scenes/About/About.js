import React from 'react';
import { View, Text, Image } from 'react-native';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Router from '../../navigation/routes.js'
import {Route} from './AboutContainer'

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

About = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../images/red-logo.png')}
                />
            <Text onPress={props.goToUser}>Click Me!</Text>
        </View>
    );
}

export default About;