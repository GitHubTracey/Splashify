import React from 'react';
import { View, Text, Dimensions, } from 'react-native';
import { styles } from './styles.js'
import Photo from '../../components/Photo'
import UserAvatar from '../../components/UserAvatar'


const height = Dimensions.get('window').height,
    width = Dimensions.get('window').width;

// grab a random photo from the api
// pass to the photo with full width, pass mainNav for lightbox
// UserAvatar at the bottom of the screen
const Random = (props) => {
    // console.log('Random, props: ', props)
    if( props.randomPhoto.user)
    {
    return (
        <View style={styles.container}>
            <Photo photo={props.randomPhoto} photoResizeMode={'cover'} flex={1} nav={props.nav} mainNav={props.mainNav} height={height} width={width} />
            <View style={styles.userAvatar}>
                <UserAvatar user={props.randomPhoto.user} opacity={0.75} nav={props.nav} />
            </View>
        </View>
    )
    } else {(
        <View style={styles.container}>
            <Photo photo={props.randomPhoto} photoResizeMode={'cover'} flex={1} nav={props.nav} mainNav={props.mainNav} height={height} width={width} />
            <View style={styles.userAvatar}>
                <Text>No User Data Provided</Text>
            </View>
        </View>
    )
    }
}
Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default Random;