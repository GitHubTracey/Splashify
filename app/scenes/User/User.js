import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles.js'
import PhotoGallery from '../../components/PhotoGallery'
import Octicons from 'react-native-vector-icons/Octicons'
const iconSize = 12;

const renderIcon = (iconName, size) => {
    return (
        <Octicons name={iconName} size={size} color={'#999999'} />
    )
}

const renderLocation = (location) => {
    return (
        location ? <Text style={styles.locationContact}>{renderIcon("location", iconSize)} {location}</Text>
            : <Text></Text>
    )
}

const renderPortfolioURL = (url) => {
    return (
        location ? <Text style={styles.locationContact}>{renderIcon("globe", iconSize)} {url}</Text>
            : <Text></Text>
    )
}

const User = (props) => {
        console.log('User', props)
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{ uri: props.user.profile_image.large }}
                    resizeMode={'contain'}
                    style={styles.image}
                    />
                <Text style={styles.name}>{props.user.name}</Text>
                {renderLocation(props.user.location)}
                {renderPortfolioURL(props.user.portfolio_url)}
                <Text style={styles.bio}>{props.user.bio}</Text>
                <PhotoGallery photoBlob={props.userPhotoBlob} nav={props.nav} mainNav={props.mainNav} />
            </View>
        </ScrollView>
    );
}

User.propTypes = {
    user: React.PropTypes.object.isRequired,
    userPhotoBlob: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default User;