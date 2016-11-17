import React from 'react';
import {
    View, Image, Text
} from 'react-native';
import { styles } from './styles.js'
import PhotoStats from '../../components/PhotoStats'

const LightBox = (props) => {
        console.log('LightBox photoBlob: ', props.photoBlob)
    return (
        <View style={styles.container} >
            <Image
                resizeMode={'contain'}
                source={{ uri: props.photoBlob.urls.raw }}
                style={styles.image}
                />
        </View>
    )
}
/*
                <PhotoStats photoBlob={photoBlob}/>
*/
LightBox.propTypes = {
    photoBlob: React.PropTypes.object.isRequired,
}

export default LightBox;