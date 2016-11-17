import React, { PropTypes, Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { statStyles } from './styles.js'

const PhotoStats = (props) => {
    console.log('PhotoStats, props: ', props)
    return (
        <View style={statStyles.outercontainer}>
            <View style={statStyles.container}>
                <Text style={statStyles.statbox}>DOWNLOADS</Text>
                <Text style={statStyles.statbox}>LIKES</Text>
                <Text style={statStyles.statbox}>{photoBlob.downloads} </Text>
                <Text style={statStyles.statbox}>{photoBlob.likes}</Text>
            </View>
        </View>
    )

}

PhotoStats.propTypes = {
    photoBlob: React.PropTypes.object.isRequired
}
export default PhotoStats;