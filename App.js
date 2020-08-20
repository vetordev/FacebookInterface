import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
    
      <Image style={styles.headerImage} source={require('./assets/header.jpg')} resizeMode="contain"/>

      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>English • Español • </Text>
        <Text style={styles.plusText}>Mais...</Text>
      </View>

      <View style={styles.formContainer}>

        <TextInput style={styles.emailInput} placeholder="Telefone ou email"/>
        <TextInput style={styles.passwordInput} placeholder="Senha"/>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPasswordText}></Text>

      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.line}/>
        <Text style={styles.orText}></Text>
        <View style={styles.line}/>
      </View>

      <View style={styles.createAccountContainer}>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}></Text>
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
    // justifyContent: 'center',
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
    color: '#00f'
  }
  
});
