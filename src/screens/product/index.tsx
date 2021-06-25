import React, { useState } from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Button, Left, Right, Icon } from 'native-base'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import Menu from '../menu'

interface Params {
  productValue: string,
  productName: string,
  imgNum: number,
  oldPrice: string,
  type: string
}

export default function Product(){
  const { navigate, goBack } = useNavigation()
  const { params } = useRoute()
  const [visible, setVisible] = useState(false)

  function toggleMenu(){
    setVisible(!visible);
  }
  const num = (params as Params)?.imgNum
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
          <TouchableOpacity onPress={toggleMenu}>
            <Icon name="menu" type='MaterialIcons' style={{color: 'white'}}/>
          </TouchableOpacity>
        </Right>
      </Header>
      <Menu visible={visible} type={ (params as Params)?.type }/>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>
            VENCE EM 5 DIAS
          </Text>
          <Text style={styles.subtitle}>
            30/06/2021
          </Text>
        </View>
        <Text style={styles.title}>
          {`${(params as Params)?.productName}`}
        </Text>
        <Image source={products[num]} style={styles.imgProduct}/>
        <View style={styles.product}>
          <View>
            <Text style={[styles.productName, {textDecorationLine: 'line-through'}]}>De: {`${(params as Params)?.oldPrice}`}</Text>
            <Text style={styles.productName}>Por:</Text>
          </View>
          <Text style={styles.price}>{`${(params as Params)?.productValue}`}</Text>
         {
           (params as Params)?.type != 'mercado' && (
             <>
              <View style={styles.market}>
                <Image source={require('../../../assets/carrefour.png')} style={styles.img}/>
                <View style={styles.marketInside}>
                  <Text style={styles.marketName}>
                    Carrefour - Bairro Campolim
                  </Text>
                  <Text>
                    ☆ 3,0 - 0,4 km de distância
                  </Text>
                </View>
              </View>
              <View style={styles.backgroundRota}>
                <Text style={styles.rota}>Ver rota</Text>
              </View>
             </>
           )
         }
        </View>
      </Content>
    </Container>
  )
}
