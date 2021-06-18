import { StyleSheet } from 'react-native'

//Aqui vai os estilos da tela
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    top: '5%',
    width: '30%'
  },
  viewButton: {
    width: '80%',
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    width: '100%',
    height:'20%',
    marginVertical: '10%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#7134D2'
  },
  buttonText: {
    color:'white', 
    fontWeight:'bold'
  },
  header: {
    backgroundColor: '#A04FE5'
  }
})