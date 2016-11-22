import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    photoContainer: {
        flex: 0.65,
        justifyContent: 'flex-start',
    },
    userStats: {
        flex: 0.35,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
    },
    userAvatar: {
        position: 'absolute',
        top: 10,
        flexDirection: 'row',
        flex: 1,
    },
    stats: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 10,
    },
    left: {
        flex: 0.5,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    right: {
        flex: 0.5,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    timeText: {
        color: '#999999',
    },
    separator: {
        marginRight: 10,
        marginLeft: 10,
        height: 1,
        //height: StyleSheet.hairlineWidth,
        backgroundColor: '#999999',
    },
});

/*
    separator: {
        flex: 1,
        marginTop: 2,
        marginRight: 10,
        marginBottom: 2,
        marginLeft: 10,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#999999',
    },

*/