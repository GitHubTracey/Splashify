import React from 'react';
import { View, Image, Text, Dimensions, } from 'react-native';
import { styles } from './styles.js'
import Photo from '../../components/Photo'
import UserAvatar from '../../components/UserAvatar'


const height = Dimensions.get('window').height,
    width = Dimensions.get('window').width;

const Random = (props) => {
    console.log('Random, props: ', props)
    return (
        <View style={styles.container}>
            <Photo photo={props.randomPhoto} nav={props.nav} mainNav={props.mainNav} height={height} width={width} />
            <View style={styles.userAvatar}>
                <UserAvatar user={props.randomPhoto.user} nav={props.nav} />
            </View>
        </View>
    )
}
Random.propTypes = {
    randomPhoto: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}
/*
        <View>
            <Image
                resizeMode={'cover'}
                source={{ uri: props.randomPhoto.urls.raw }}
                style={styles.image}
                />
            <View style={styles.userAvatar}>
                <UserAvatar user={props.randomPhoto.user} nav={props.nav} />
            </View>
        </View>
*/
export default Random;