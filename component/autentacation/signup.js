import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, styleSheet, TouchableOpicety, Text, Row } from 'native-base';
export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require("#")}
            />
            <Text style={styles.logoText}>Welcome to My app</Text>
          </View>
          <Form type="Signup">
            <Item floatingLabel last>
              <Input style={styles.input}
                underlineColorAndroid='rgb(0,0,0,0)'
                placeholder="Username"
                placeholderTextColor='#ffffff'
                selectionColor='#fff'
                keyboardType="email-address"
              />
            </Item>
            <Item floatingLabel last>
              <Input style={styles.input}
                underlineColorAndroid='rgb(0,0,0,0)'
                placeholder="Email"
                placeholderTextColor='#ffffff'
                selectionColor='#fff'
                keyboardType="email-address"
              />
            </Item>
            <Item floatingLabel last>
              <Input style={styles.input}
                underlineColorAndroid='rgb(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor='#ffffff'
              />
            </Item>
            <TouchableOpicety style={styles.button}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpicety>
          </Form>
          <View style={styles.signupTextCont}>
            <Text stylle={styles.signupText}>Already have an account?</Text>
            <Text style={styles.signupButton}>Sign in</Text>
          </View>
        </Content>
      </Container >
    );
  }
}

const styles = styleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItem: 'center'
  },
  logo: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItem: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgb(255,255,255,0.7)'
  },
  input: {
    width: 300,
    backgroundColor: 'rgb(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    placeholderTextColor: 'ffffff',
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlidn: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItem: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 15,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgb(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
})