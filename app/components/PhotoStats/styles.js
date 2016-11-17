import {
    Dimensions,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F5FCFF',
    },
    statbox: {
        width: Dimensions.get('window').width / 2,
        height: 56,
        fontSize: 24,
    },
});
