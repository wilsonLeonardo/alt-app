import React, { useState } from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Button, Left, Right, Icon } from 'native-base'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import Menu from '../menu'

interface Params {
  type: string
}
export default function HomeClient(){
  const { navigate, goBack } = useNavigation()
  const [visible, setVisible] = useState(false)
  const { params } = useRoute()

  function toggleMenu(){
    setVisible(!visible);
  }

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
      <Menu visible={visible} type={(params as Params)?.type}/>
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.title}>
            Mercados Próximos
        </Text>
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
        <View style={styles.market}>
          <Image source={require('../../../assets/pao-de-acucar.png')} style={styles.img}/>
          <View style={styles.marketInside}>
            <Text style={styles.marketName}>
              Pão de Açucar - Bairro Campolim
            </Text>
            <Text>
              ☆ 4,6 - 1 km de distância
            </Text>
          </View>
        </View>
        <View style={styles.market}>
          <Image source={require('../../../assets/confianca.png')} style={styles.img}/>
          <View style={styles.marketInside}>
            <Text style={styles.marketName}>
              Confiança - Bairro Jardim Vera Cruz
            </Text>
            <Text>
              ☆ 4,8 - 1,4 km de distância
            </Text>
          </View>
        </View>
        <Text style={[styles.title,{marginTop: -5}]}>
            Produtos
        </Text>
        <View style={{ alignItems: 'center', justifyContent: 'center',flexDirection: 'row'}}>
          <View style={styles.product}>
            <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Arroz', productValue:'R$ 2,99', imgNum:0, oldPrice:'R$ 4,99' })}}>
              <Image source={require('../../../assets/arroz.jpg')} style={styles.imgProduct}/>
              <View style={styles.line}></View>
              <Text style={styles.productName}>Arroz</Text>
              <Text style={styles.price}>R$ 4,99</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.product}>
            <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Feijão', productValue:'R$ 3,90', imgNum:1, oldPrice:'R$ 6,90' })}}>
              <Image source={require('../../../assets/feijao.jpg')} style={styles.imgProduct}/>
              <View style={styles.line}></View>
              <Text style={styles.productName}>Feijão</Text>
              <Text style={styles.price}>R$ 3,90</Text>
            </TouchableOpacity>
          </View> 

          <View style={styles.product}>
            <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Bolacha', productValue:'R$ 0,89', imgNum:2, oldPrice:'R$ 1,99' })}}>
              <Image source={require('../../../assets/bolacha.jpg')} style={styles.imgProduct}/>
              <View style={styles.line}></View>
              <Text style={styles.productName}>Bolacha</Text>
              <Text style={styles.price}>R$ 2,79</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  )
}