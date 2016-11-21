import React from 'react'
import {
    View, Dimensions, Platform, Text
} from 'react-native'
import { styles } from './styles.js'
import Photo from '../Photo'
import UserAvatar from '../UserAvatar'
import TimeAgo from 'react-native-timeago'

const width = Dimensions.get('window').width;
var height = 0;

const renderLocation = (location) => {
    if (location) {
        if (location.city && location.country)
            return <Text>{location.city}, {location.country}</Text>
        else if (location.city)
            return <Text>{location.city}</Text>
        return <Text>{location.country}</Text>
    }
    else {  return {} } 
}

const PhotoWithStats = (props) => {
    if (Platform.OS === 'ios')
        height = Dimensions.get('window').height * 0.41

    else if (Platform.OS === 'android')
        height = Dimensions.get('window').height * 0.5

    if (props.photo.location) {
        return (
            <View>
                <Photo photo={props.photo} nav={props.nav} flex={props.photoFlex} mainNav={props.mainNav} height={height} width={width} />
                <View style={styles.userStats}>
                    <View style={styles.userAvatar}>
                        <UserAvatar user={props.user} lightStyle={true} opacity={props.avatarOpacity} nav={props.nav} />
                    </View>
                    <Text style={styles.separator}></Text>
                    <View style={styles.stats}>
                        <View style={styles.left}>
                            <Text><TimeAgo time={props.photo.created_at} /></Text>
                        </View>
                        <View style={styles.right}>
                            {renderLocation(props.photo.location)}
                        </View>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View>
                <Photo photo={props.photo} nav={props.nav} flex={props.photoFlex} mainNav={props.mainNav} height={height} width={width} />
                <View style={styles.userStats}>
                    <View style={styles.userAvatar}>
                        <UserAvatar user={props.user} opacity={props.avatarOpacity} nav={props.nav} />
                    </View>
                    <Text style={styles.separator}></Text>
                    <View style={styles.stats}>
                        <View style={styles.left}>
                            <Text><TimeAgo time={props.photo.created_at} /></Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
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