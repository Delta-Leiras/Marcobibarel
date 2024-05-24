import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './components/Titulo';


const App = () => 
<View style={styles.container}>
      <Titulo></Titulo>
      <Text>O bagui de cima é o título</Text>
      <StatusBar style="auto" />
 </View>;

export default App;

const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
