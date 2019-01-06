import React, { Component } from 'react';
import { View, Text  } from 'react-native';
// import firebase from 'firebase';
import { Header } from './components/common';
// import LoginForm from './LoginForm';


class App extends Component {

    // componentWillMount() {
    //     firebase.inializeApp(
    //         {
    //             apiKey: "AIzaSyAyjEPxvbGenOxm7QJR4oZN_JR46uistXI",
    //             authDomain: "authentication-eb5df.firebaseapp.com",
    //             databaseURL: "https://authentication-eb5df.firebaseio.com",
    //             projectId: "authentication-eb5df",
    //             storageBucket: "authentication-eb5df.appspot.com",
    //             messagingSenderId: "721013450581"
    //           });
    // }

    
    render() {
        return (
            <View>
                <Header headerText="Squaaad Goals" /> 
                {/* <LoginForm /> */}
                <Text>
                    hello kenyon
                </Text>
            </View>
        
        );
    }
};

export default App;