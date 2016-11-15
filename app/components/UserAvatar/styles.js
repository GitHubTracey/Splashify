import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const avatarStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'flex-end',
        marginBottom: 56,
        backgroundColor: 'red',
        //height: 72,
        width: Dimensions.get('window').width,
        opacity: 0.5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    user: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        margin: 12,
        fontSize: 16,
    },
});