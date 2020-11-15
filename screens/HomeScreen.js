import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, LayoutAnimation} from 'react-native';
import * as firebase from 'firebase';

export class HomeScreen extends Component {
    state = {
        email: '',
        displayName: ''
    }
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
 this.setState({ email, displayName });
    }
    signOutUser = () => {
        firebase.auth().signOut();
        }
        render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
 <Text> Hi {this.state.email} </Text>
 <Text> Hi {this.state.displayName} </Text>
 <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
 <Text>Logout</Text>
 </TouchableOpacity>
 </View>
 )
 }
}
export default HomeScreen
const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: "center",
 alignItems: "center"
 }
})



