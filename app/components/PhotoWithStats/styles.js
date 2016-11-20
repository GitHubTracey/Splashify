import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userAvatar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
    },
    stats: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        zIndex: 2
    },
    left: {
        flex: 0.6,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    right: {
        flex: 0.4,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    separator: {
        flex: 1,
        marginTop: 2,
        marginRight: 10,
        marginBottom: 2,
        marginLeft: 10,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#999999',
    },
});