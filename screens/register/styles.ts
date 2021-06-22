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
    bottom: '7%',
    width: '30%'
  },
  viewButton: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    width: '100%',
    height:'40%',
    bottom:'15%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#DD8650'
  },
  buttonText: {
    color:'white', 
    fontWeight:'bold'
  },
  viewInput: {
    width:'100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex:3
  },
  inputView: {
    alignItems:'flex-start', 
    width:'80%',
    height: '15%',
    marginTop: 5
  },
  textInput: {
    backgroundColor:'#e5e4e2',
    width:'100%', 
    height:'60%', 
    borderRadius: 5
  },
  buttonFooter: {
    width: '50%',
    // marginVertical: '3%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#A04FE5'
  }
})