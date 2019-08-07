import React, { Component } from 'react';
import {Text, View, AppRegistry, StyleSheet, ScrollView} from 'react-native';
import { connect } from 'react-redux';

export class Listing extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {name, need, price, agency, contact} = this.props;

        return (
            <View style={styles.Container}>
                <View style={styles.Listing}>
                    <Text style={styles.Name}>{name}</Text>
                    <Text>{need}</Text>
                    <Text>{price}</Text>
                    <Text>{agency}</Text>
                    <Text>{contact}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#009EFD',
        marginBottom: 10,
    },

    Listing: {
        margin: 10,
    },

    Name: {
        fontSize: 25,
        color: '#C94343',
        fontWeight: 'bold',
        letterSpacing: 0.7,
    },
});

export default connect()(Listing);