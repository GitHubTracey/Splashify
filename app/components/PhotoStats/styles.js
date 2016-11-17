import {
    Dimensions,
    StyleSheet,
} from 'react-native';

const statStyles = StyleSheet.create({
    outerContainer: {
        flex: 1,
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
