import {
    StyleSheet,
} from 'react-native';

export const avatarStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', 
        height: 72,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    user: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        margin: 10,
        fontSize: 16,
        justifyContent: 'center',
    },
});