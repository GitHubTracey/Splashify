import React, { PropTypes, Component } from 'react';
import {
    View,
    ListView,
    Image,
    Text,
} from 'react-native';
import { avatarStyles } from './styles.js'
// import { _goToPage } from '../../lib/navigationHelpers.js'
import { withNavigation } from '@exponent/ex-navigation';

class UserAvatar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={avatarStyles.container} >
                <View onPress={this._goToPage(this.props.navigator, 'user')} style={avatarStyles.user} >
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
}

UserAvatar.propTypes = {
    user: React.PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
}
export default UserAvatar;