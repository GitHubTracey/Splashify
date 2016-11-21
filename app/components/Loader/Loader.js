import React from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import { styles } from './styles.js'

// displays an animated ActivityIndicator when items are loading
const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} size="large" color="black" />
        </View>
    )
}

export default Loader;