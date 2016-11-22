import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 18,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    appInfo: {
        justifyContent: 'flex-start',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    grey: {
        color: '#999999',
        fontSize: 16,
    },
    font: {
        fontSize: 18,
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
})