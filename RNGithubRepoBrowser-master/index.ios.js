/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

import UserCardList from './src/components/UserCardList';
import Header from './src/components/Header';

export default class RNGithubRepoBrowser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <UserCardList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('RNGithubRepoBrowser', () => RNGithubRepoBrowser);
