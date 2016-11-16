import React, { Component, PropTypes, } from 'react';
import { View, Text, ListView, ScrollView, } from 'react-native';
import Photo from '../Photo'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    render(props) {
        return (
            <View>
                <Text>Print out the Props</Text>
                <ListView
                    dataSource={props.photoBlob}
                    renderRow={(data) =>
                        <Text>{data.user.name}</Text>}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    />
            </View>
        );
    }
}
PhotoGallery.propTypes = {
    photoBlob: React.PropTypes.object.isRequired
}
/*
            <ListView
                dataSource={props.photoList}
                renderRow={(data) =>
                    <Photo photo={data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
 */
export default PhotoGallery;

                // <ListView
                //     dataSource={this.state.dataSource}
                //     renderRow={(data) =>
                //         <View style={styles.user}>
                //             <Image
                //                 source={{ uri: data.avatar }}
                //                 style={styles.image}
                //                 />
                //             <Text style={styles.text}>{data.first_name} {data.last_name}</Text>
                //         </View>}
                //     renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                //     />