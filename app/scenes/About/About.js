import React from 'react'
import { View, Text, Image } from 'react-native'
import {
    StyleSheet,
} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

//Screen for brief overview of project
//TODO: complete this screen
const About = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../images/red-logo.png')}
                />
                <Text>Splashify! using the Unsplash API</Text>
        </View>
    )
}

export default About