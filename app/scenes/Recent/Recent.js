import React from 'react';
import { View, Text, ListView, Dimensions} from 'react-native';
import { styles } from './styles.js'
// import PhotoGallery from '../../components/PhotoGallery'
import Photo from '../../components/Photo'
import UserAvatar from '../../components/UserAvatar'

const height = Dimensions.get('window').height*0.41,
    width = Dimensions.get('window').width;

const Recent = (props) => {
    console.log('Recent')
    console.log(`height: ${height}, width: ${width}`)
    return (
        <View style={styles.container}>
            <ListView
                dataSource={props.recentPhotoBlob}
                renderRow={(data) =>
                    <View>
                        <Photo photo={data} nav={props.nav} flex={1} mainNav={props.mainNav} height={height} width={width} />
                        <View style={styles.userAvatar}>
                            <UserAvatar user={data.user} nav={props.nav} />
                        </View>
                    </View>
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