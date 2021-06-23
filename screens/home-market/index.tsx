import React from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Button, Left, Right, Icon } from 'native-base'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function HomeMarket(){
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
          <Text style={{color:'white', fontSize: 25}}>Alt Tech</Text>
        </Body>
        <Right style={{flex: 1}}>
          <TouchableOpacity onPress={() => {navigate('Menu')}}>
            <Icon name="menu" type='MaterialIcons' style={{color: 'white'}}/>
          </TouchableOpacity>
        </Right>
      </Header>
      
      <Content contentContainerStyle={styles.content}>
        <Text style={styles.title}>
            Meus Produtos
        </Text>
        <View style={styles.row}>
          <View style={{ alignItems: 'center', justifyContent: 'center',flexDirection: 'row'}}>
            <View style={styles.product}>
              <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Arroz', productValue:'R$ 2,99', imgNum:0, oldPrice:'R$ 4,99' })}}>
                <Image source={require('../../../assets/arroz.jpg')} style={styles.imgProduct}/>
                <View style={styles.line}></View>
                <Text style={styles.productName}>Arroz</Text>
                <Text style={styles.price}>R$ 2,99</Text>
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
                <Text style={styles.price}>R$ 0,89</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ alignItems: 'center', justifyContent: 'center',flexDirection: 'row'}}>
            <View style={styles.product}>
            <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Nescau', productValue:'R$ 4,29', imgNum:3, oldPrice:'R$ 7,90' })}}>
                <Image source={require('../../../assets/nescau.jpg')} style={styles.imgProduct}/>
                <View style={styles.line}></View>
                <Text style={styles.productName}>Nescau</Text>
                <Text style={styles.price}>R$ 4,29</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.product}>
              <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Ketchup', productValue:'R$ 6,90', imgNum:4, oldPrice:'R$ 9,99' })}}>
                <Image source={require('../../../assets/ketchup.jpg')} style={styles.imgProduct}/>
                <View style={styles.line}></View>
                <Text style={styles.productName}>Ketchup</Text>
                <Text style={styles.price}>R$ 6,90</Text>
              </TouchableOpacity>
            </View> 

            <View style={styles.product}>
              <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Macarrão', productValue:'R$ 4,89', imgNum:5, oldPrice:'R$ 8,89' })}}>
                <Image source={require('../../../assets/macarrao.jpg')} style={styles.imgProduct}/>
                <View style={styles.line}></View>
                <Text style={styles.productName}>Macarrão</Text>
                <Text style={styles.price}>R$ 4,89</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ alignItems: 'center', justifyContent: 'center',flexDirection: 'row'}}>
            <View style={styles.product}>
              <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Ovos', productValue:'R$ 9,99', imgNum:6, oldPrice:'R$ 14,99' })}}>
                <Image source={require('../../../assets/ovos.jpg')} style={styles.imgProduct}/>
                <View style={styles.line}></View>
                <Text style={styles.productName}>Ovos</Text>
                <Text style={styles.price}>R$ 9,99</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.product}>
              <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Presunto', productValue:'R$ 5,10', imgNum:7, oldPrice:'R$ 10,99' })}}>
                <Image source={require('../../../assets/presunto.jpg')} style={styles.imgProduct}/>
                <View style={styles.line}></View>
                <Text style={styles.productName}>Presunto</Text>
                <Text style={styles.price}>R$ 5,10</Text>
              </TouchableOpacity>
            </View> 

            <View style={styles.product}>
              <TouchableOpacity onPress={() => {navigate('Product',  { productName: 'Sabonete', productValue:'R$ 0,79', imgNum:8, oldPrice:'R$ 2,79' })}}>
                <Image source={require('../../../assets/sabonete.jpg')} style={styles.imgProduct}/>
                <View style={styles.line}></View>
                <Text style={styles.productName}>Sabonete</Text>
                <Text style={styles.price}>R$ 0,79</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  )
}