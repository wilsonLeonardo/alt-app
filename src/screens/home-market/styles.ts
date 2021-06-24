import { StyleSheet } from 'react-native'

//Aqui vai os estilos da tela
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start'
  },
  img: {
    width: 90,
    height: 90,
    resizeMode: 'contain'
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
    textAlign: 'left',
    margin : 10
  },
  marketInside: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  marketName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  market: {
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  product:{
    width: 100,
    height: 150,
    backgroundColor: '#EEEEEE',
    margin: 8,
    //alignItems: 'center',
    //justifyContent: 'flex-start',
    borderRadius: 8
  },
  imgProduct:{
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 100,
    width: 65,
    height: 65,
  },
  line:{
    marginTop: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'flex-start',
  },
  productName:{
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  price:{
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#38A904'
  },
  row:{
    
  }
})