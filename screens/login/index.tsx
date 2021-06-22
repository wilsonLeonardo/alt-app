import React, { useState, useEffect } from 'react';
import { styles } from './styles'
//Acesse a documentação do native base para maiores detalhes
import { Body, Container, Content, Footer, Button } from 'native-base'
import { Text, View, TextInput, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login(){
  const { navigate } = useNavigation()
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <StatusBar barStyle='dark-content'/>
        <Image source={require('../../../assets/image.png')} style={styles.img}/>
        <View style={styles.viewInput}>
          <View style={styles.inputView}>
            <Text>Email</Text>
            <TextInput 
              autoCapitalize='none'
              style={styles.textInput}/>
          </View>
          <View style={styles.inputView}>
            <Text>Senha</Text>
            <TextInput 
              secureTextEntry={true}
              style={styles.textInput}/>
          </View>
        </View>
        <View style={styles.forgetPassword}>
          <TouchableOpacity>
            <Text 
              style={{color:'#999999', textDecorationLine:'underline'}}>
                Esqueceu sua senha?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButton}>
          <Button style={styles.button} onPress={() => navigate('HomeClient')}>
            <Text style={styles.buttonText}> Login </Text>
          </Button>
          <Button style={[styles.button, {backgroundColor:'#4267B2'}]} onPress={() => navigate('HomeMarket')}>
            <Text style={styles.buttonText}> Continuar com Facebook </Text>
          </Button>
        </View>
      </Content>
      <Footer style={styles.footer}>
        <TouchableOpacity onPress={() => navigate('UserType')}>
          <Text style={{color:'#A04FE5', fontSize:18}}>Novo por aqui? Cadastre-se</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}