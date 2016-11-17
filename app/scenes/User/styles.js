import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        marginTop: 40,
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 24,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
    },
    locationContact: {
        fontSize: 16,
        color: '#999999',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
    },
    bio: {
        fontSize: 16,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
    },
    photoPadding: {
        padding: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});