/**
 * Created by moksha on 22/01/17.
 */
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const UserCard = ({user}) => {
    const {login, avatar_url} = user;
    const {
        rootContainerStyle,
        cardContainerStyle,
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <TouchableOpacity onPress={()=>console.log('touched')}>
            <View style={rootContainerStyle}>
                <View style={cardContainerStyle}>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            style={thumbnailStyle}
                            source={{ uri: avatar_url }}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{login}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = {
    rootContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    cardContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 80,
        width: 80
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 500,
        flex: 1,
        width: null
    }
};

export default UserCard;