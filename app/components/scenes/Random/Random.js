import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { randomStyles } from './styles.js'
//import { UserAvatar } from '../../UserAvatar'

const Random = (props) => {
    return (
        <View>
            <Text style={randomStyles.container}>Random</Text>
            <Image
                resizeMode={'contain'}
                source={{ uri: props.randomPhoto.urls.raw }}
                style={randomStyles.image}
                />
        </View>
    )
}

Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired
}

export default Random;