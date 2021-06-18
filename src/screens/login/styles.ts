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
  viewInput: {
    width:'100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '20%'
  },
  inputView: {
    alignItems:'flex-start', 
    width:'80%'
  },
  textInput: {
    backgroundColor:'#e5e4e2',
    width:'100%', 
    height:'55%', 
    top: '5%', 
    borderRadius: 5
  },
  forgetPassword: {
    width:'80%', 
    top:15, 
    alignItems:'flex-start'
  },
  footer: {
    alignItems: 'center',
    backgroundColor:'white'
  },
  img: {
    bottom: '10%'
  },
  viewButton: {
    top: '5%',
    width: '80%',
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    width: '70%',
    left: '40%',
    marginVertical: '3%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#A04FE5'
  },
  buttonText: {
    color:'white', 
    fontWeight:'bold'
  }
})