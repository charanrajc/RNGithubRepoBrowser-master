import React from 'react';
import {Text, View} from 'react-native';

/*
 Create a stateless component called Header.
 This component serves as a header for all screens
 */
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Github Repo Browser</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#4286f4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 18,
        color: '#FFF'
    }
};

export default Header;
