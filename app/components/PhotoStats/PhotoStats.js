import React, { PropTypes, Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { styles } from './styles.js'

const PhotoStats = (props) => {
    console.log('PhotoStats, props: ', props)
    return (
        <View style={styles.outercontainer}>
            <View style={styles.container}>
                <Text style={styles.statbox}>DOWNLOADS</Text>
                <Text style={styles.statbox}>LIKES</Text>
                <Text style={styles.statbox}>{photoBlob.downloads} </Text>
                <Text style={styles.statbox}>{photoBlob.likes}</Text>
            </View>
        </View>
    )

}

PhotoStats.propTypes = {
    photoBlob: React.PropTypes.object.isRequired
}
export default PhotoStats;