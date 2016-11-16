import {
    Dimensions,
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    image: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    userAvatar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
    }
});