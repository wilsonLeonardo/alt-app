import { StyleSheet } from 'react-native'

//Aqui vai os estilos da tela
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
  },
  img: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    borderRadius: 100
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
  },
  title: {
    color:'#A04FE5',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginTop : 10
  },
  marketInside: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  marketName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  market: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    marginHorizontal: 30,
    height: 75
  },
  product:{
    //width: 100,
    //height: 150,
    backgroundColor: '#EEEEEE',
    //margin: 8,
    //alignItems: 'center',
    //justifyContent: 'flex-start',
    //borderRadius: 8
  },
  imgProduct:{
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 100,
    width: 210,
    height: 210,
  },
  line:{
    marginTop: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'flex-start',
  },
  productName:{
    marginTop: 5,
    marginLeft: 35,
    fontSize: 24,
  },
  price:{
    fontSize: 48,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#38A904',
    marginTop: -25,
    marginBottom: 10
  },
  row:{
    
  },
  titleBackground:{
    backgroundColor:'#ECECEC'
  },
  subtitle:{
    alignSelf: 'center',
    color:'#A04FE5',
    fontWeight: 'bold',
    marginBottom: 8
  },
  rota:{
    alignSelf: 'center',
    //backgroundColor: '#A04FE5',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backgroundRota:{
    backgroundColor: '#A04FE5',
    width: 100,
    height: 27,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: -10,
    marginBottom: 100
  }
})