import React from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Button, Left, Right, Icon } from 'native-base'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function UserType(){
  const { navigate, goBack } = useNavigation()
  return (
    <Container style={styles.container}>
      <Header style={styles.header} iosBarStyle="dark-content">
        <Left style={{flex: 1, alignItems:'center'}}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-back-ios" type='MaterialIcons' style={{color: 'white'}}/>
          </TouchableOpacity>
        </Left>
        <Body style={{flex: 2}}>
          <Text style={{color:'white', fontSize: 25}}>Tipo de usuário</Text>
        </Body>
        <Right style={{flex: 1}}/>
      </Header>
      <Content contentContainerStyle={styles.content}>
        <Image 
          resizeMode='contain'
          source={require('../../../assets/image.png')} 
          style={styles.img}/>
        <View style={styles.viewButton}>
          <Button
            onPress={() => navigate('Register', { type: 'Cliente' })} 
            style={styles.button} 
          >
            <Text style={styles.buttonText}> Consumidor </Text>
          </Button>
          <Button 
            onPress={() => navigate('Register', { type: 'Mercado' })}
            style={[styles.button, {backgroundColor:'#AA56EA'}]}
          >
            <Text style={styles.buttonText}> Mercado </Text>
          </Button>
          <Button
            onPress={() => navigate('Register', { type: 'ONG' })} 
            style={[styles.button, {backgroundColor:'#C277FB'}]}
          >
            <Text style={styles.buttonText}> ONG </Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
}