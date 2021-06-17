import React, { useState, useEffect } from 'react';
import { styles } from './styles'
//Acesse a documentação do native base para maiores detalhes
import { Body, Container, Content, Footer, Header, Button } from 'native-base'
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login(){
  const { navigate } = useNavigation()
  return (
    <Container style={styles.container}>
      <Header>
        <Body>
          <Text>Alt Tech App</Text>
        </Body>
      </Header>
      <Content contentContainerStyle={styles.content}>
        <Text>Aqui vai o conteudo da tela, botoes, inputs e etc</Text>
        <Button onPress={() => navigate('Home')}/>
      </Content>
      <Footer style={{alignItems: 'center'}}>
          <Text>Aqui vai a footer</Text>
      </Footer>
    </Container>
  )
}