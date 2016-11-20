import React, { PropTypes, Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { avatarStyles } from './styles.js'
import { _goToUser } from '../../lib/navigationHelpers.js'

const UserAvatar = (props) => {
    return (
        <TouchableOpacity
            style={avatarStyles.touchableArea} 
            onPress={_goToUser(props.nav, props.user.username).bind(this)}
            activeOpacity={75 / 100}>
            <View style={[avatarStyles.container, {opacity: props.opacity} ]} >
                <View style={avatarStyles.user} >
                    <Image
                        source={{ uri: props.user.profile_image.large }}
                        resizeMode={'contain'}
                        style={avatarStyles.image}
                        />
                    <Text style={avatarStyles.text}>{props.user.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired,
    opacity: React.PropTypes.number.isRequired,
    nav: React.PropTypes.object.isRequired,
}
export default UserAvatar;