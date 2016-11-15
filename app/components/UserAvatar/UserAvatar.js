import React from 'react';
import {
    View,
    ListView,
    Image,
    Text,
} from 'react-native';
import { avatarStyles } from './styles.js'

const UserAvatar = () => {
    return (
        <View style={avatarStyles.container} >
            <View style={avatarStyles.user} >
                <Text>This is a test</Text>
            </View>
        </View>
    )
}
/*
            <Image
                source={{ uri: props.profile_image.small }}
                resizeMode={'contain'}
                style={avatarStyles.image}
                />
            <Text style={avatarStyles.text}>{props.usr.profile_image.small}</Text>
            <Text style={avatarStyles.text}>{props.usr.first_name}</Text>
            <Text style={avatarStyles.text}>{props.usr.last_name}</Text>
            <Text style={avatarStyles.text}>{props.first_name} {props.last_name}</Text>

UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired
}
*/
export default UserAvatar;