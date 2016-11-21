import React from 'react';
import { View, ListView} from 'react-native';
import { styles } from './styles.js'
import PhotoWithStats from '../../components/PhotoWithStats'

// Takes recentPhotoBlob (set of photos) and opens each as a PhotoWithStats
// photos need: flex for width, 
// user avatar: requires user info & opacity for picture (in this case we want a white background, so opacity = 1)
// mainNav passed in order to allow lightbox to appear on top of mainStack
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

export default Recent;
