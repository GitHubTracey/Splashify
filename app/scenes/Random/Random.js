import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { randomStyles } from './styles.js'
// import UserAvatar from '../../components/UserAvatar'

const Random = (props) => {
    return (
        <View style={randomStyles.container}>
            <Image
                resizeMode={'cover'}
                source={{ uri: props.randomPhoto.urls.raw }}
                style={randomStyles.image}
                >
                </Image>
        </View>
    )
}
Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired
}

export default Random;