import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

/////// premission off qr
import * as Permissions from 'expo-permissions';


class ScanScreen extends Component {
  onSuccess = e => {
    console.log(e)
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

AppRegistry.registerComponent('default', () => ScanScreen);
















// import * as React from 'react';
// import { Button, View, Text, Image, TextInput } from 'react-native';
// import Head from './header';

// export default class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mytext: '',
//     }
//   }
//   render() {

//     let value = this.state.mytext;
//     let { name } = this.props.route.params;
//     let { num } = this.props.route.params;

//     return (<View>
//       <Text>this is home screen</Text>
//     </View>
//       // <View style={{ flex: 1, marginTop: 30 }}>
//       //   <Head toggleDrawer={this.props.navigation} />

//       //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
//       //     {/* this is just  navigate */}
//       //     <Button title="Refresh" onPress={() => { this.props.navigation.navigate('Home', { num: Math.floor(Math.random() * 100) }) }} />
//       //     {/*     this.props.navigation.push  is just i stack navigation not in tab or other */}
//       //     {/* <Button title="Refresh push" onPress={() => { this.props.navigation.push('Home',{ num: Math.floor(Math.random()*100)})}} /> */}
//       //     <TextInput placeholder="type text"
//       //       style={{ height: 30, padding: 2, borderBottomColor: 'gray', borderStyle: 'dashed', borderBottomWidth: 2, }}
//       //       value={this.state.mytext}
//       //       onChangeText={(text) => { this.setState({ mytext: text }) }} />
//       //     <Text>reload Data {num}</Text>
//       //     <Text>{value === "" ? name : value}</Text>
//       //     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
//       //       <Button title="About" onPress={() => { this.props.navigation.navigate('About', { mydata: this.state.mytext, defvalue: name }) }} />
//       //       <Button title="Contact" onPress={() => { this.props.navigation.navigate('Contact', { mydata: this.state.mytext }) }} />
//       //     </View>
//       //   </View>
//       // </View>

//     );
//   }
// }
