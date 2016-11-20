import React from 'react';
import {
    View, Dimensions, Platform, Text
} from 'react-native';
import { styles } from './styles.js'
import Photo from '../Photo'
import UserAvatar from '../UserAvatar'
var TimeAgo = require('react-native-timeago');

const width = Dimensions.get('window').width;
var height = 0;

const renderLocation = (city, country) => {
    if (city && country)
        return <Text>{city}, {country}</Text>
    else if (city)
        return <Text>{city}</Text>
    return <Text>{country}</Text>

}

const PhotoWithStats = (props) => {
    console.log('PhotoWithStats  props.photo: ', props.photo)

    if (Platform.OS === 'ios')
        height = Dimensions.get('window').height * 0.41

    else if (Platform.OS === 'android')
        height = Dimensions.get('window').height * 0.5

    console.log('PhotoWithStats  height: ', height)


    return (
        <View>
            <Photo photo={props.photo} nav={props.nav} flex={props.photoFlex} mainNav={props.mainNav} height={height} width={width} />
            <View style={styles.stats}>
                <View style={styles.left}>
                    <Text><TimeAgo time={props.photo.created_at} /></Text>
                </View>
                <View style={styles.right}>
                    {renderLocation(props.photo.location.city, props.photo.location.country)}
                </View>
            </View>
            <Text style={styles.separator}></Text>
            <View style={styles.userAvatar}>
                <UserAvatar user={props.user} opacity={props.avatarOpacity} nav={props.nav} />
            </View>
        </View>
    )
}

PhotoWithStats.propTypes = {
    photo: React.PropTypes.object.isRequired,
    photoFlex: React.PropTypes.number.isRequired,
    user: React.PropTypes.object.isRequired,
    avatarOpacity: React.PropTypes.number.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default PhotoWithStats;