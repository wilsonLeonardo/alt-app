import React, { useState } from 'react';
import { styles } from './styles'
import { Body, Container, Content, Header, Button, Left, Right, Icon } from 'native-base'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

interface MenuProps {
  visible: boolean,
  type?: string
}

export default function Product({
  visible,
  type
}: MenuProps){
  const { navigate } = useNavigation()

  if(!visible) return null;

  if(type == 'mercado') 
    return (
      <Container style={styles.container}>
        <View style={[styles.menu, {height: 1000, backgroundColor: '#C684FF'}]}>
          <TouchableOpacity onPress={() => navigate('HomeMarket')}>
            <Text style={styles.marketName}>Meus produtos</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <Text style={styles.marketName}>Cadastrar produto</Text>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={() => navigate('Ong')}>
            <Text style={styles.marketName}>Saiba como doar</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={() => navigate('Planos')}>
            <Text style={styles.marketName}>Planos</Text>
          </TouchableOpacity>
        </View>
    </Container>

    )

  return (
    <Container style={styles.container}>
      <View style={[styles.menu, {height: 1000, backgroundColor: '#C684FF'}]}>
        <Text style={styles.marketName}>Mercados</Text>
        <View style={styles.line}></View>
        <Text style={styles.marketName}>Produtos</Text>
        {
          type != 'ONG' && (
            <>
            <View style={styles.line}></View>
            <TouchableOpacity onPress={() => navigate('Ong')}>
                <Text style={styles.marketName}>Saiba como doar</Text>
              </TouchableOpacity>
            </>
          )
        }
        <View style={styles.line}></View>
        <TouchableOpacity onPress={() => navigate('Receitas')}>
         <Text style={styles.marketName}>Receitas</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}
