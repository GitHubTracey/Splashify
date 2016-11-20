import React from 'react';
import {
    View, Image, Text, TouchableOpacity, CameraRoll, Platform,
} from 'react-native';
import { styles, avatarStyles, statStyles } from './styles.js'
import Octicons from 'react-native-vector-icons/Octicons'
import { _goBack } from '../../lib/navigationHelpers.js'
import { isPhotoFaved, updatePhotoFave,  } from '../../lib/databaseHelpers.js'

const iconSize = 24;

const renderFaveIcon = (isFaved, iconName, size) => {
    return (
        <Octicons name={iconName} size={size} color={isFaved ? 'yellow' : '#999999'} />
    )
}

const renderIcon = (iconName, size) => {
    return (
        <Octicons name={iconName} size={size} color={'#999999'} />
    )
}

const Lightbox = (props) => {
    console.log('Lightbox photoBlob: ', props.photoBlob)
    return (
        <View style={styles.outerContainer}>
            <View style={styles.userContainer}>
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
                    <Text style={styles.close}
                        onPress={() => {
                            _goBack(props.mainNav)
                        }
                        }>
                        {renderIcon("x", iconSize)}</Text>
                </View>
            </View>
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
                                    console.log("saving photo to camera roll", props.photoBlob.urls.raw)
                                    CameraRoll.saveToCameraRoll(props.photoBlob.urls.raw, "photo")}
                                }
                                activeOpacity={75 / 100}>
                            {renderIcon("cloud-download", iconSize)}
                            </TouchableOpacity>
                        </View>
                    }
                        <View style={styles.right}>
                            <TouchableOpacity
                                style={styles.close}
                                onPress={() => {
                                    console.log("Pressed bookmark!")
                                    props.updateFaved()
                                } }
                                activeOpacity={75 / 100}>
                                {renderFaveIcon(props.isFaved, "bookmark", iconSize)}
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>
            <View style={styles.statsContainer}>
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

Lightbox.propTypes = {
    photoBlob: React.PropTypes.object.isRequired,
    updateFaved: React.PropTypes.func.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default Lightbox;
/*

                        <View style={styles.right}>
                            <TouchableOpacity
                                style={styles.close}
                                onPress={() => {
                                    console.log("Pressed bookmark!")
                                    updatePhotoFave(props.photoBlob.id, isPhotoFaved(props.photoBlob.id))
                                    renderFaveIcon(isPhotoFaved(props.photoBlob.id), "bookmark", iconSize)
                                } }
                                activeOpacity={75 / 100}>
                                {renderFaveIcon(props.isFaved, "bookmark", iconSize)}
                            </TouchableOpacity>
                        </View>

                            <Text
                                style={styles.close}
                                onPress={() => {
                                    console.log("Pressed bookmark!")
                                    updatePhotoFave(props.photoBlob.id, props.isFaved)
                                    renderFaveIcon(props.isFaved, "bookmark", iconSize)
                                } }>
                                {renderFaveIcon(props.isFaved, "bookmark", iconSize)}
                            </Text>




            <View style={styles.statsContainer}>
                <View style={statStyles.container}>
                    <Text style={statStyles.statbox}>DOWNLOADS</Text>
                    <Text style={statStyles.statbox}>LIKES</Text>
                    <Text style={statStyles.statbox}>{props.photoBlob.downloads} </Text>
                    <Text style={statStyles.statbox}>{props.photoBlob.likes}</Text>
                </View>
            </View>


                    <Text style={styles.close} onPress={_goBack(props.mainNav).bind(this)} >{renderIcon("x", iconSize)}</Text>


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
                        <Text style={styles.close}>{renderFaveIcon( isPhotoFaved(props.photoBlob.id), "bookmark", iconSize)}</Text>
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
                */