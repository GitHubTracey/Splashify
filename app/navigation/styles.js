import {
    StyleSheet,
} from 'react-native';

export const navigationStyles = StyleSheet.create({
  selectedTab: {
    backgroundColor: '#0084FF',
  },
});

export const styles = StyleSheet.create({
    header: {
        height: 20
    },

    selectedItemStyle: {
        backgroundColor: 'blue'
    },

    titleText: {
        fontWeight: 'bold'
    },

    selectedTitleText: {
        color: 'black'
    },

    notSelectedTitleText: {
        color: '#999999'
    }
});