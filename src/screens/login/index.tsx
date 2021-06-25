import React, { useState } from 'react';
import { styles } from './styles'
//Acesse a documentação do native base para maiores detalhes
import { Container, Content, Footer, Button } from 'native-base'
import { Text, View, TextInput, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login(){
  const { navigate } = useNavigation()
  const [email, setEmail] = useState('')

  function login(){
    if(email == 'teste@mercado.com') navigate('HomeMarket')
    else if(email == 'cliente@gmail.com' ) navigate('HomeClient')
    else if(email == 'teste@ong.com') navigate('HomeClient', { type: 'ONG' })
    else if(email == '') return Alert.alert('Erro', 'Preencha o campo email!')
    else return Alert.alert('Erro', 'Não foi encontrado o usuário informado!') 
  }

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <StatusBar barStyle='dark-content'/>
        <Image source={require('../../../assets/image.png')} style={styles.img}/>
        <View style={styles.viewInput}>
          <View style={styles.inputView}>
            <Text>Email</Text>
            <TextInput 
              value={email}
              onChangeText={text => setEmail(text)}
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
          <Button style={styles.button} onPress={login}>
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