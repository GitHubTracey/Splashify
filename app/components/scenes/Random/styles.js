import {
    Dimensions,
    StyleSheet,
} from 'react-native';

export const randomStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {
        margin: 10,
        fontSize: 16,
        justifyContent: 'center',
    },
});