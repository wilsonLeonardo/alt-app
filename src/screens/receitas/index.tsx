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
      <View style={styles.subtitle}>
        <View style={{left: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: "#A04FE5"}}>Receitas</Text>
          <Text style={{fontSize: 15, top: 5}}>Receitas simples e barata para o dia a dia</Text>
        </View>
      </View>
      <Content>
        <List>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[0]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 1</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[1]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 2</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[0]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 1</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[2]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 3</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[3]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 4</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[4]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 5</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[5]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 6</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
          <ListItem>
            <Left style={{flex: 0.2}}>
              <Thumbnail source={products[6]} small/>
            </Left>
            <Body style={{alignItems: 'flex-start', flex: 1}}>
              <Title>
                <Text>Receita 7</Text>
              </Title>
              <Subtitle>
                <Text style={{fontWeight: 'bold', color:'black'}}>. 40 minutos</Text>
                <Text> - Ingrediente 1, ingrediente 2</Text>
              </Subtitle>
            </Body>
          </ListItem>
        </List>
      </Content>
      
    </Container>
  )
}
