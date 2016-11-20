import React from 'react';
import { View, Text, ListView, Dimensions} from 'react-native';
import { styles } from './styles.js'
import PhotoWithStats from '../../components/PhotoWithStats'

const Recent = (props) => {
    return (
        <View style={styles.container}>
            <ListView
                dataSource={props.recentPhotoBlob}
                renderRow={(data) =>
                    <PhotoWithStats photo={data} photoFlex={1} user={data.user} avatarOpacity={1} nav={props.nav} mainNav={props.mainNav} />
                }
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