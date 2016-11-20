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