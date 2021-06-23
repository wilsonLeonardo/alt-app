import React from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Button, Left, Right, Icon } from 'native-base'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'



export default function Product(){
  const { navigate, goBack } = useNavigation()


  //`${(params as Params)?.imgURL}`
  return (
    <Container style={styles.container}>
      <Header style={styles.header} iosBarStyle="dark-content">
        <Left style={{flex: 1, alignItems:'center'}}>
        </Left>
        <Body style={{flex: 2}}>
          <Text style={{color:'white', fontSize: 25, fontWeight: 'bold', marginLeft: -40}}>Alt Tech</Text>
        </Body>
        <Right style={{flex: 1}}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="menu" type='MaterialIcons' style={{color: 'white'}}/>
          </TouchableOpacity>
        </Right>
      </Header>
      
      <View style={[styles.menu, {height: 1000, backgroundColor: '#C684FF'}]}>
        <Text style={styles.marketName}>Mercados</Text>
        <View style={styles.line}></View>
        <Text style={styles.marketName}>Produtos</Text>
        <View style={styles.line}></View>
        <Text style={styles.marketName}>Saiba como doar</Text>
        <View style={styles.line}></View>
        <Text style={styles.marketName}>Receitas</Text>
      </View>
    </Container>
  )
}
