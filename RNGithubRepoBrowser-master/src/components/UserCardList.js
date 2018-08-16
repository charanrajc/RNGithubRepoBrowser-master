/**
 * Created by moksha on 22/01/17.
 */
import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import * as CONSTANTS from '../Constants';
import UserCard from './UserCard';

export default class UserCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    componentWillMount() {
        console.log('componentWillMount');
        fetch(`${CONSTANTS.API_ENDPOINT}/users`)
            .then(response => response.json())
            .then(users => this.setState({users, loading: false}))
    }

    renderUserCards() {
        return this.state.users ? this.state.users.map(user => <UserCard key={user.login} user={user}/>) : null;
    }

    render() {
        return (
            <ScrollView>
                <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#4286f4'}}/>
                {this.renderUserCards()}
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});