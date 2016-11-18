import React from 'react';
import { ListView, View, Text, Dimensions, Image } from 'react-native';
import { styles } from './styles.js'
import Photo from '../../components/Photo'
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

const width = (Dimensions.get('window').width - 6) / 3,
    flex = 1 / 3;

const User = (props) => {
    console.log('User')
    return (
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
            <View style={styles.row}>
                <ListView
                    dataSource={props.userPhotoBlob}
                    contentContainerStyle={styles.photo}
                    renderRow={(data) =>
                        <View style={styles.photoPadding}>
                            <Photo photo={data} nav={props.nav} flex={flex} mainNav={props.mainNav} height={width} width={width} />
                        </View>
                    }
                    />
            </View>
        </View>
    );
}
/*
            <ListView
                style={styles.row}
                dataSource={props.userPhotoBlob}
                renderRow={(data) =>
                    <View style={styles.photoPadding}>
                        <Photo photo={data} nav={props.nav} mainNav={props.mainNav} height={width} width={width} />
                    </View>
                }
                />
*/
User.propTypes = {
    user: React.PropTypes.object.isRequired,
    userPhotoBlob: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default User;