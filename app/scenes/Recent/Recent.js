import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js'

const Recent = () => {
    return (
        <View style={styles.container}>
            <Text>Zoom Zoom Zoom, We're going to the moon! Recent</Text>
        </View>
    );
}

Recent.propTypes = {};
Recent.defaultProps = {};

export default Recent;