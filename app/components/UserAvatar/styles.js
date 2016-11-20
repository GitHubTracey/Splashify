import {
    StyleSheet,
} from 'react-native';

export const avatarStyles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'flex-start', 
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    user: {
        padding: 10,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    text: {
        margin: 12,
        fontSize: 16,
    },
    touchableArea : {
        flex: 1,
    }
});