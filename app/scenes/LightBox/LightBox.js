import React from 'react';
import {
    View, Image, Text
} from 'react-native';
import { styles, avatarStyles, statStyles } from './styles.js'
import PhotoStats from '../../components/PhotoStats'
import Octicons from 'react-native-vector-icons/Octicons'
import { _goBack } from '../../lib/navigationHelpers.js'
import {isPhotoFaved} from '../lib/databaseHelpers.js'

const iconSize = 24;

const renderIcon = (isFaved, iconName, size) => {
    return (
        <Octicons name={iconName} size={size} color={isFaved ? '#ffd505': '#999999'} />
    )
}

const LightBox = (props) => {
    console.log('LightBox photoBlob: ', props.photoBlob)
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={avatarStyles.container} style={styles.left}>
                    <View style={avatarStyles.user}>
                        <Image
                            source={{ uri: props.photoBlob.user.profile_image.large }}
                            resizeMode={'contain'}
                            style={avatarStyles.image}
                            />
                        <Text style={avatarStyles.text}>{props.photoBlob.user.name}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.close}>{renderIcon("x", iconSize)}</Text>
                </View>
            </View>
            <Image
                resizeMode={'contain'}
                source={{ uri: props.photoBlob.urls.raw }}
                style={styles.image}
                >
                <View>
                    <View style={styles.left}>
                        <Text style={styles.close}>{renderIcon("cloud-download", iconSize)}</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.close}>{renderIcon( isPhotoFaved(props.photoBlob.id), "bookmark", iconSize)}</Text>
                    </View>
                </View>
            </Image>
            <View style={statStyles.outercontainer}>
                <View style={statStyles.container}>
                    <Text style={statStyles.statbox}>DOWNLOADS</Text>
                    <Text style={statStyles.statbox}>LIKES</Text>
                    <Text style={statStyles.statbox}>{props.photoBlob.downloads} </Text>
                    <Text style={statStyles.statbox}>{props.photoBlob.likes}</Text>
                </View>
            </View>
        </View>
    )
}
/*
        <View style={styles.container} >
                <View> // top
                    <View>  //image and name    on Left
                    </View>
                    <View> // X                 on Right
                    </View>
                </View>
                <Image
                    resizeMode={'contain'}
                    source={{ uri: props.photoBlob.urls.raw }}
                    style={styles.image}
                    >
                    <View> // top border of image
                        <View>  //cloud-download    on Left
                        </View>
                        <View> // bookmark          on Right
                        </View>
                    </View>
                    <Image />
                    <PhotoStats photoBlob={photoBlob} />
        </View>
                */
LightBox.propTypes = {
    photoBlob: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default LightBox;