import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles.js'
import PhotoGallery from '../../components/PhotoGallery'

const Favourites = (props) => {
        console.log('Favourites', props)
    return (
        <ScrollView>
            <View style={styles.container}>
                <PhotoGallery photoBlob={props.photoBlob} nav={props.nav} mainNav={props.mainNav} />
            </View>
        </ScrollView>
    );
}

Favourites.propTypes = {
    photoBlob: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default Favourites;