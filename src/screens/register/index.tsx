import React, { useState } from 'react';
import { styles } from './styles'
import { Container, Content, Button, Footer, Header, Left, Icon, Body } from 'native-base'
import { Text, View, Image,  StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'

interface Params {
  type: string
}
export default function Register(){
  const { params } = useRoute()
  const { goBack, navigate } = useNavigation()

  function register(){
    const type = (params as Params)?.type
    if(type == 'Mercado' ) navigate('HomeMarket')
    else if(type == 'Cliente') navigate('HomeClient')
    else if(type == 'ONG') navigate('HomeClient', { type: 'ONG' })
  }

  return (
    <Container style={styles.container}>
      <StatusBar barStyle='dark-content'/>
      <Header style={{ backgroundColor:'white', borderBottomWidth: 0, height: 60 }}>
        <Left  style={{flex: 1, alignItems:'center'}}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-back-ios" type='MaterialIcons' style={{color: '#A04FE5'}}/>
          </TouchableOpacity>
        </Left>
        <Body style={{flex: 3}}/>
      </Header>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.viewButton}>
          <Image 
            resizeMode='contain'
            source={require('../../../assets/image.png')} 
            style={styles.img}/>
          <Button style={styles.button}>
            <Text style={styles.buttonText}> Cadastro - {`${(params as Params)?.type}`}  </Text>
          </Button>
        </View>
        <View style={styles.viewInput}>
          <View style={styles.inputView}>
            <Text>Nome</Text>
            <TextInput 
              style={styles.textInput}/>
          </View>
          <View style={styles.inputView}>
            <Text>Telefone</Text>
            <TextInput 
              keyboardType='numeric'
              style={styles.textInput}/>
          </View>
          {
            (params as Params)?.type !== 'Cliente' && (
              <View style={styles.inputView}>
                <Text>CNPJ</Text>
                <TextInput 
                  autoCapitalize='none'
                  style={styles.textInput}/>
              </View>
            )
          }
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
          <View style={styles.inputView}>
            <Text>Confirmar senha</Text>
            <TextInput 
              secureTextEntry={true}
              style={styles.textInput}/>
          </View>
        </View>
      </Content>
      <Footer style={{backgroundColor: 'white', borderTopWidth: 0}}>
          <Button style={styles.buttonFooter} onPress={register}>
            <Text style={styles.buttonText}> Cadastrar </Text>
          </Button>
      </Footer>
    </Container>
  )
}