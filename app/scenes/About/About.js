import React from 'react';
import { View, Text, Image } from 'react-native';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Router from '../../navigation/routes.js'

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const About = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../images/red-logo.png')}
                />
            <Text onPress={props.goToUser}>Click Me!</Text>
        </View>
    );
}
About.propTypes = {
    goToUser: React.PropTypes.func.isRequired,
}

export default About;