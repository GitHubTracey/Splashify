import React from 'react';
import {
    View, Image
} from 'react-native';
import { styles } from './styles.js'
import UserAvatar from '../UserAvatar'

const Photo = (props) => {
    return (
        <View>
            <Image
                resizeMode={'cover'}
                source={{ uri: props.photo.urls.raw }}
                style={styles.image}
                />
            <View style={styles.userAvatar}>
                <UserAvatar user={props.photo.user} />
            </View>
        </View>
    )
}
Photo.propTypes = {
    photo: React.PropTypes.object.isRequired
}

export default Photo;