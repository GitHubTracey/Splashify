import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1, 
        backgroundColor: 'black',
    },
    container: {
        flex: 1, 
        marginTop: 56,
        backgroundColor: 'black',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    left: {
        flex: 0.8, 
        flexDirection: 'row',
        justifyContent: 'flex-start', 
    },
    right: {
        flex: 0.2, 
        flexDirection: 'row',
        justifyContent: 'flex-end', 
    },
});

export const avatarStyles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: 'black',
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
        color: 'white',
    },
});

export const statStyles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        height: 56,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'black',
    },
    statbox: {
        width: Dimensions.get('window').width / 2,
        height: 56,
        fontSize: 24,
    },
    statText: {
        color: '#999999',
    },
});
