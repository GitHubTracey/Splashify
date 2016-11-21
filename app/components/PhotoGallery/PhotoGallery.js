import React, { Component, } from 'react';
import { View, ListView, Dimensions, } from 'react-native';
import Photo from '../Photo'
import { styles } from './styles.js'

const width = (Dimensions.get('window').width - 6) / 3,
    flex = 1 / 3;

class PhotoGallery extends Component {
    render() {
        //console.log('PhotoGallery', this.props)
        return (
            <View style={styles.row}>
                <ListView
                    dataSource={this.props.photoBlob}
                    contentContainerStyle={styles.photo}
                    enableEmptySections={true}
                    renderRow={(data) =>
                        <View style={styles.photoPadding}>
                            <Photo photo={data} nav={this.props.nav} mainNav={this.props.mainNav} flex={flex} height={width} width={width} />
                        </View>
                    }
                    />
            </View>
        );
    }
}
PhotoGallery.propTypes = {
    photoBlob: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

export default PhotoGallery;