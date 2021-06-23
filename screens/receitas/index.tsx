import React from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Button, Left, Right, Icon } from 'native-base'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'

interface Params {
  productValue: string,
  productName: string,
  imgNum: Int8Array,
  oldPrice: string
}

export default function Product(){
  const { navigate, goBack } = useNavigation()
  const { params } = useRoute()
  const num = `${(params as Params)?.imgNum}`
  const products = [
    require('../../../assets/arroz.jpg'),
    require('../../../assets/feijao.jpg'),
    require('../../../assets/bolacha.jpg'),
    require('../../../assets/nescau.jpg'),
    require('../../../assets/ketchup.jpg'),
    require('../../../assets/macarrao.jpg'),
    require('../../../assets/ovos.jpg'),
    require('../../../assets/presunto.jpg'),
    require('../../../assets/sabonete.jpg'),
  ]; 

  //`${(params as Params)?.imgURL}`
  return (
    <Container style={styles.container}>
      <Header style={styles.header} iosBarStyle="dark-content">
        <Left style={{flex: 1, alignItems:'center'}}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-back-ios" type='MaterialIcons' style={{color: 'white'}}/>
          </TouchableOpacity>
        </Left>
        <Body style={{flex: 2}}>
          <Text style={{color:'white', fontSize: 25}}>Alt Tech</Text>
        </Body>
        <Right style={{flex: 1}}>
          <TouchableOpacity onPress={() => {navigate('Menu')}}>
            <Icon name="menu" type='MaterialIcons' style={{color: 'white'}}/>
          </TouchableOpacity>
        </Right>
      </Header>
      
    </Container>
  )
}
