import {
    Dimensions,
    StyleSheet,
} from 'react-native';

export const randomStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.8,
        
    },
    text: {
        margin: 10,
        fontSize: 16,
        justifyContent: 'center',
    },
});