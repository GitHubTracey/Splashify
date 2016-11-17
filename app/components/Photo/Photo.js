import React from 'react';
import {
    View, Image, TouchableOpacity
} from 'react-native';
import { styles } from './styles.js'
import UserAvatar from '../UserAvatar'
import { _goToLightBox } from '../../lib/navigationHelpers.js'

const Photo = (props) => {
        console.log('Photo  props.photo: ',  props.photo)
    return (
        <View>
            <TouchableOpacity
                style={styles.touchableArea}
                onPress={_goToLightBox(props.mainNav, props.photo).bind(this)}
                activeOpacity={75 / 100}>
                <Image
                    resizeMode={'cover'}
                    source={{ uri: props.photo.urls.raw }}
                    style={styles.image}
                    />
            </TouchableOpacity>
            <View style={styles.userAvatar}>
                <UserAvatar user={props.photo.user} nav={props.nav} />
            </View>
        </View>
    )
}
Photo.propTypes = {
    photo: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default Photo;