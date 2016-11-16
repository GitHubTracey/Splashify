import {
    Dimensions,
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // height: undefined,
        // width: undefined,
    },
    image: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 0,
    },
    userAvatar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
    }
});