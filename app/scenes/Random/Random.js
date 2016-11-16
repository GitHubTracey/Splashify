import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { styles } from './styles.js'
import UserAvatar from '../../components/UserAvatar'

const Random = (props) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode={'cover'}
                source={{ uri: props.randomPhoto.urls.raw }}
                style={styles.image}
                />
            <View style={styles.userAvatar}>
                <UserAvatar user={props.randomPhoto.user} />
            </View>
        </View>
    )
}
Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired
}

export default Random;