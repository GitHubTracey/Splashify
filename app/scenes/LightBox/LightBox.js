import React from 'react'
import {
    View, Image, Text, TouchableOpacity, CameraRoll, Platform,
} from 'react-native'
import { styles, avatarStyles, statStyles } from './styles.js'
import Octicons from 'react-native-vector-icons/Octicons'
import { _goBack } from '../../lib/navigationHelpers.js'
// import UserAvatar from '../../components/UserAvatar'

//default icon size for all icons
const iconSize = 26;
//update "Fave" or Bookmark icon when clicked : yellow when "faved", grey when not 
const renderFaveIcon = (isFaved, iconName, size) => {
    return <Octicons name={iconName} size={size} color={isFaved ? 'yellow' : '#999999'} />
}
//render other icons in grey
const renderIcon = (iconName, size, color) => {
    return <Octicons name={iconName} size={size} color={color} />
}

// display photo in an environment where it can stand out.
// top is user avatar with name
// then photo
// top LHS is download icon
// top RHS is "fave" or bookmark icon (to save to local mobile realm db)
// bottom LHS has # of total downloads according to unsplash api
// bottom RHS has # of total likes according to unsplash api
const Lightbox = (props) => {
    //console.log('Lightbox photoBlob: ', props.photoBlob)
    return (
        <View style={styles.outerContainer}>
            <View style={styles.userContainer}>
                <View style={styles.left}>
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
                    <Text style={styles.close}
                        onPress={() => {
                            _goBack(props.mainNav)
                        }
                        }>
                        {renderIcon("x", iconSize, 'white')}</Text>
                </View>
            </View>
            <View style={styles.imagePositionContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode={'contain'}
                        source={{ uri: props.photoBlob.urls.raw }}
                        style={styles.image}
                        >
                        <View style={styles.actionIconsContainer}>
                            {Platform.OS === 'ios' &&
                                <View style={styles.left}>
                                    <TouchableOpacity
                                        style={styles.close}
                                        onPress={() => {
                                            alert("saving photo to camera roll", props.photoBlob.urls.raw)
                                            CameraRoll.saveToCameraRoll(props.photoBlob.urls.raw, "photo")
                                        }
                                        }
                                        activeOpacity={75 / 100}>
                                        {renderIcon("cloud-download", iconSize, '#999999')}
                                    </TouchableOpacity>
                                </View>
                            }
                            <View style={styles.right}>
                                <TouchableOpacity
                                    style={styles.close}
                                    onPress={() => {
                                        props.updateFaved()
                                    } }
                                    activeOpacity={75 / 100}>
                                    {renderFaveIcon(props.isFaved, "bookmark", iconSize)}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Image>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={statStyles.container}>
                    <View style={statStyles.row}>
                        <Text style={statStyles.statboxHeader}>DOWNLOADS</Text>
                        <Text style={statStyles.statboxHeader}>LIKES</Text>
                    </View>
                    <View style={statStyles.row}>
                        <Text style={statStyles.statbox}>{props.photoBlob.downloads} </Text>
                        <Text style={statStyles.statbox}>{props.photoBlob.likes}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

Lightbox.propTypes = {
    photoBlob: React.PropTypes.object.isRequired,
    isFaved: React.PropTypes.bool.isRequired,
    updateFaved: React.PropTypes.func.isRequired,
    mainNav: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
}

export default Lightbox
