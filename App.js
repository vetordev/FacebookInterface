import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <>
    <View style={styles.container}>
    
      <Image style={styles.headerImage} source={require('./assets/header.jpg')} resizeMode="contain"/>

      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>English  •  Español  •  </Text>
        <Text style={styles.plusText}>Mais...</Text>
      </View>

      <View style={styles.formContainer}>

        <TextInput style={styles.emailInput} placeholder="Telefone ou email"/>
        <TextInput style={styles.passwordInput} placeholder="Senha"/>

        <TouchableOpacity style={styles.loginButton} activeOpacity={0.65}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>

      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.line}/>
        <Text style={styles.orText}>ou</Text>
        <View style={styles.line}/>
      </View>

      <View style={styles.createAccountContainer}>
        <TouchableOpacity style={styles.createAccountButton} activeOpacity={0.65}>
          <Text style={styles.createAccountText}>Criar nova conta do Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
    <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerImage: {
    backgroundColor: '#000',
    height: 220
  },
  languageContainer: {
    marginTop: 7,
    flexDirection: 'row'
  },
  languageText: {
    fontFamily: 'Roboto',
    color: '#555'
  }, 
  plusText: {
    fontFamily: 'Roboto',
    color: '#2d74b8'
  },
  formContainer: {
    marginVertical: 55,
    width: '100%',
    alignItems: 'center'
  },
  emailInput: {
    padding: 5,
    width: '90%',

    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

    fontFamily: 'Roboto',
    fontSize: 17,
    marginBottom: 15
  },
  passwordInput: {
    padding: 5,
    width: '90%',

    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

    fontFamily: 'Roboto',
    fontSize: 17,
    marginBottom: 15
  },
  loginButton: {
    width: '90%',
    height: 35,
    marginBottom: 15,

    backgroundColor: '#1878f3',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  loginText: {
    color: '#fff',
  },
  forgotPasswordText: {
    color: '#266dcc',
    fontWeight: 'bold',
    fontSize: 15
  },
  separatorContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginBottom: 70,
  },
  orText: {
    fontFamily: 'Roboto',
    color: '#888',
    marginHorizontal: 5
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#d0d0d0'
  },
  createAccountContainer: {
    width: '100%',
    alignItems: 'center'
  },
  createAccountButton: {
    width: '60%',
    height: 35,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    

    backgroundColor: '#31a14b'
  },
  createAccountText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
  
});
