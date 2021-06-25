import React from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Left, Right, Icon, Thumbnail, Subtitle, Title } from 'native-base'
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
  const products = require('../../../assets/ong.jpeg')

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
        <Right style={{flex: 1}}/>
      </Header>
      <View style={styles.subtitle}>
        <View style={{left: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: "#A04FE5"}}>
            Planos Especias
          </Text>
          <Text style={{fontSize: 15, marginTop: 10, textAlign: 'right', left: -40}}>
            Que tal uma parceria? Conheça nossos pacotes especiais para mercados.
            Neles você pode adquirir planos de cupons para dar um up no seu negócio!
          </Text>
        </View>
      </View>
      <Content contentContainerStyle={{alignItems:'center'}}>
        <View style={{backgroundColor: '#d8844f52', width: 300, height: 130, marginVertical: 15, borderRadius: 5}}>
          <Text style={{left: 10, fontSize: 25, fontWeight: 'bold', color: "#A04FE5", top: 5}}>
            Planos Básico
          </Text>
          <View style={{width: '90%', flexDirection:'row', justifyContent:'flex-end', top: 30}}>
            <Thumbnail source={require('../../../assets/basico.png')} style={{left: -15}}/>
            <View>
              <Text style={{left: 10, fontSize: 18, fontWeight: 'bold', color: "#DD8650", top: 5}}>
                50 cupons mensais
              </Text>
              <Text style={{left: 50, fontSize: 18, fontWeight: 'bold', color: "#F17D34", top: 5}}>
                R$ 20,99/mês
              </Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#d8844f52', width: 300, height: 130, marginVertical: 15, borderRadius: 5}}>
          <Text style={{left: 10, fontSize: 25, fontWeight: 'bold', color: "#A04FE5", top: 5}}>
            Planos Premium
          </Text>
          <View style={{width: '90%', flexDirection:'row', justifyContent:'flex-end', top: 30}}>
            <Thumbnail source={require('../../../assets/premium.png')} style={{left: -8}}/>
            <View>
              <Text style={{left: 10, fontSize: 18, fontWeight: 'bold', color: "#DD8650", top: 5}}>
                150 cupons mensais
              </Text>
              <Text style={{left: 50, fontSize: 18, fontWeight: 'bold', color: "#F17D34", top: 5}}>
                R$ 29,99/mês
              </Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#d8844f52', width: 300, height: 130, marginVertical: 15, borderRadius: 5}}>
          <Text style={{left: 10, fontSize: 25, fontWeight: 'bold', color: "#A04FE5", top: 5}}>
            Planos Black
          </Text>
          <View style={{width: '90%', flexDirection:'row', justifyContent:'flex-end', top: 30}}>
            <Thumbnail source={require('../../../assets/black.png')} style={{left: -5}}/>
            <View>
              <Text style={{left: 10, fontSize: 18, fontWeight: 'bold', color: "#DD8650", top: 5}}>
                500 cupons mensais
              </Text>
              <Text style={{left: 50, fontSize: 18, fontWeight: 'bold', color: "#F17D34", top: 5}}>
                R$ 57,99/mês
              </Text>
            </View>
          </View>
        </View>
        
      </Content>
      
    </Container>
  )
}
