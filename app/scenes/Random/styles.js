import {
    Dimensions,
    StyleSheet,
} from 'react-native';

export const randomStyles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
        height: undefined,
        width: undefined,
    },
    image: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-136,
        zIndex: 0,
    },
});