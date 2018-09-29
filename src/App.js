import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase from 'firebase';
import { Header } from './components/common';
import  LoginForm from './components/LoginForm';

class App extends Component {

  // componentWillMount() {
  //   // firebase.initalizaApp(
  // //     {
  // //   apiKey: 'AIzaSyC74veh5IHpKM4-v3nbZdT_5ft3Y3Rmvks',
  // //   authDomain: 'authentication-fa008.firebaseapp.com',
  // //   databaseURL: 'https://authentication-fa008.firebaseio.com',
  // //   projectId: 'authentication-fa008',
  // //   storageBucket: 'authentication-fa008.appspot.com',
  // //   messagingSenderId: '205805169571'
  // // }
  // //  );
  // }
render() {
return (
  <View>
  <Header headerText="Authentication" />
  <LoginForm />
  </View>
);
}

}

export default App;
