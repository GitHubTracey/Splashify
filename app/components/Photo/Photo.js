import React from 'react';
import {
    View, Image, TouchableOpacity
} from 'react-native';
import { _goToLightbox } from '../../lib/navigationHelpers.js'
//'contain'
const Photo = (props) => {
        //console.log('Photo  props.photo: ',  props.photo)
    return (
        <View>
            <TouchableOpacity
                onPress={_goToLightbox(props.mainNav, props.photo, props.photo.user).bind(this)}
                activeOpacity={75 / 100}>
                <Image
                    resizeMode={props.resizeMode}
                    source={{ uri: props.photo.urls.raw }}
                    style={{width: props.width, height: props.height, flex: props.flex, backgroundColor: 'transparent' }}
                    />
            </TouchableOpacity>
        </View>
    )
}
Photo.propTypes = {
    photo: React.PropTypes.object.isRequired,
    width: React.PropTypes.number.isRequired,
    flex: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
    resizeMode: React.PropTypes.string.isRequired,
}

export default Photo;