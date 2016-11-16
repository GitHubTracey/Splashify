import React, { PropTypes } from 'react';
import {
    View,
    ListView,
    Image,
    Text,
} from 'react-native';
import { avatarStyles } from './styles.js'
// import _goToPage from '../../lib/navigationHelpers.js'

const UserAvatar = (props) => {
    return (
        <View style={avatarStyles.container} >
            <View style={avatarStyles.user} >
                <Image
                    source={{ uri: props.user.profile_image.large }}
                    resizeMode={'contain'}
                    style={avatarStyles.image}
                    />
                <Text style={avatarStyles.text}>{props.user.name}</Text>
            </View>
        </View>
    )
}

UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired
}
export default UserAvatar;