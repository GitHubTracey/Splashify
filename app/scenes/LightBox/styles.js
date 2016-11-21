import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    userContainer: {
        flex: 0.15, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    imagePositionContainer: {
        flex: 0.7, 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'flex-start', 
        alignItems: 'center',
    },
    actionIconsContainer: {
        position: 'absolute',
        top: 0,
        flex: 1,
        flexDirection: 'row',
    },
    statsContainer: {
        position: 'absolute',
        bottom: 0,
        flex: 0.15, 
        flexDirection: 'row',
    },
    container: {
        flex: 1, 
        marginTop: 56,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    left: {
        flex: 0.9, 
        flexDirection: 'row',
        justifyContent: 'flex-start', 
    },
    right: {
        flex: 0.1, 
        flexDirection: 'row',
        justifyContent: 'flex-end', 
    },
    close: {
        padding: 10,
    },
});

export const avatarStyles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
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
    container: {
        flex: 1,
        height: 56,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    statboxHeader: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        fontSize: 12,
        color: '#999999',
    },
    statbox: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        fontSize: 24,
        color: 'white',
    },
});
