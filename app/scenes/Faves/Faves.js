import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles.js'
import PhotoGallery from '../../components/PhotoGallery'

const Faves = (props) => {
        console.log('Faves', props)
    return (
        <ScrollView>
            <View style={styles.container}>
                <PhotoGallery photoBlob={props.photoBlob} nav={props.nav} mainNav={props.mainNav} />
            </View>
        </ScrollView>
    );
}

Faves.propTypes = {
    photoBlob: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default Faves;