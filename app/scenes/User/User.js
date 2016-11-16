import React from 'react';
import { View, Text } from 'react-native';

const User = (props) => {
    return (
        <View>
            <Text>The Name is: {props.name}</Text>
        </View>
    );
}

User.propTypes = {
    name: React.PropTypes.string.isRequired,
}

export default User;