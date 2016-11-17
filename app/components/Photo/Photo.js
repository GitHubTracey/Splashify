import React from 'react';
import {
    View, Image, TouchableOpacity
} from 'react-native';
import { styles } from './styles.js'
import { _goToLightBox } from '../../lib/navigationHelpers.js'

const Photo = (props) => {
        console.log('Photo  props.photo: ',  props.photo)
    return (
        <View>
            <TouchableOpacity
                style={styles.touchableArea}
                onPress={_goToLightBox(props.mainNav, props.photo, props.photo.user).bind(this)}
                activeOpacity={75 / 100}>
                <Image
                    resizeMode={'cover'}
                    source={{ uri: props.photo.urls.raw }}
                    style={{width: props.width, height: props.height, backgroundColor: 'transparent' }}
                    />
            </TouchableOpacity>
        </View>
    )
}
Photo.propTypes = {
    photo: React.PropTypes.object.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}
/*
            <TouchableOpacity
                style={styles.touchableArea}
                onPress={_goToLightBox(props.mainNav, props.photo).bind(this)}
                activeOpacity={75 / 100}>
                <Image
                    resizeMode={'cover'}
                    source={{ uri: props.photo.urls.raw }}
                    style={{width: props.width, height: props.height, backgroundColor: 'transparent' }}
                    />
            </TouchableOpacity>
*/
export default Photo;