import React from 'react';
import { View, Text, Image } from 'react-native';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        justifyContent: 'center', 
        alignItems: 'center',
    },
});

const About = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../images/red-logo.png')}
                />
        </View>
    );
}

export default About;