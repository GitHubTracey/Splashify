import React from 'react';
import { View, Text, ListView, } from 'react-native';
import { styles } from './styles.js'
// import PhotoGallery from '../../components/PhotoGallery'
import Photo from '../../components/Photo'


const Recent = (props) => {
    return (
        <View style={styles.container}>
                <ListView
                    dataSource={props.recentPhotoBlob}
                    renderRow={(data) =>
                        <Photo photo={data} nav={props.nav}  mainNav={props.mainNav} />
                }
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    />
        </View>
    );
}

Recent.propTypes = {
    recentPhotoBlob: React.PropTypes.object.isRequired,
    nav: React.PropTypes.object.isRequired,
    mainNav: React.PropTypes.object.isRequired,
}

//      <PhotoGallery photoBlob={props.recentPhotoBlob} />
export default Recent;

/*
            <View>
                <Text>Print out the Props</Text>
                <ListView
                    dataSource={props.recentPhotoBlob}
                    renderRow={(data) =>
                        <Photo photo={data} />
                }
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    />
            </View>
*/