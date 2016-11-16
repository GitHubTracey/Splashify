import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const avatarStyles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: 'white',
        opacity: 0.75,
        justifyContent: 'center', 
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
});
/*
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'flex-end',
        marginBottom: 200,
        backgroundColor: 'red',
        //height: 72,
        width: Dimensions.get('window').width,
        opacity: 0.5,
    },
 */