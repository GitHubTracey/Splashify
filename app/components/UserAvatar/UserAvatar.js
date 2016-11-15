import React from 'react';
import {
    View,
    ListView,
    Image,
    Text,
} from 'react-native';
import { avatarStyles } from './styles.js'

const UserAvatar = (props) => {
    return (
        <View style={avatarStyles.container} >
            <View style={avatarStyles.user} >
                <Image
                    source={{ uri: props.user.profile_image.large }}
                    resizeMode={'contain'}
                    style={avatarStyles.image}
                    />
            </View>
                <Text style={avatarStyles.text}>{props.user.name}</Text>
        </View>
    )
}
/*
*/
UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired
}
export default UserAvatar;