import React from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, List, ListItem, Left, Right, Icon, Thumbnail, Subtitle, Title } from 'native-base'
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
          <Text style={{fontSize: 25, fontWeight: 'bold', color: "#A04FE5"}}>Doação</Text>
          <Text style={{fontSize: 15, top: 5}}>Para realizar doações entre em contato com algumas das nossas ONG’S parceiras.</Text>
        </View>
      </View>
      <Text style={{left:20, marginVertical: 10, fontSize: 25, fontWeight: 'bold', color: "#A04FE5"}}>ONG'S</Text>
      <Content>
        <List >
          <ListItem >
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 1</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 2</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 1</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 3</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 4</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 5</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 6</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>ONG 7</Text>
              </Title>
              <Subtitle>
                <Text> • Telefone: (11) 1111-1111</Text>
              </Subtitle>
            </Body>
          </ListItem>
        </List>
      </Content>
      
    </Container>
  )
}
