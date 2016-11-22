/*eslint no-undef: "error"*/
/*eslint-env node*/
import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles.js'

//Screen for brief overview of project
const About = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../images/red-logo.png')}
                />
            <View style={styles.appInfo}>
                <Text></Text><Text></Text><Text></Text>
                <Text style={styles.font}>Splashify Mobile App</Text>
                <Text style={styles.font}>Application Version: <Text style={styles.bold}>1.0</Text></Text><Text></Text>
                <Text style={styles.font}>2016</Text><Text></Text>
            </View>
            <Text></Text><Text style={styles.separator}></Text><Text></Text>
            <View>
                <Text style={styles.bold}>Credits:</Text><Text></Text>
                <Text style={styles.font}>Splashify was built using the Unsplash API, with help from the following:</Text><Text></Text>
                <Text style={styles.grey}>ex-navigation</Text><Text></Text>
                <Text style={styles.grey}>react-native</Text><Text></Text>
                <Text style={styles.grey}>react-native-timeago</Text><Text></Text>
                <Text style={styles.grey}>react-native-vector-icons</Text><Text></Text>
                <Text style={styles.grey}>realm-js</Text><Text></Text>
                <Text style={styles.grey}>unsplash-js</Text>
            </View>
        </View>
    )
}

export default About