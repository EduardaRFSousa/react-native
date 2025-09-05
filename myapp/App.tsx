// Componentes utilizados para construir a página, importados do React Native
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
// Componente StatusBar serve para configurar a barrinha superior da tela (Experimente trocar o style 'dark' por 'light')
import { StatusBar } from 'expo-status-bar';

// ATENÇÃO: Todas as tags de componentes começam em maiúsculo!
/* Sobre o RETURN da function App (função de chamada da aplicação):
O return só pode retornar um único componente (<View>), que é 
uma div gigante que funcionacomo o elemento <html> */
export default function App() {
  return (
    <View style={styles.container}>
      {/* Comentários dentro do componente view principal são
       tratados como objeto, ou seja, é obrigatório as ASPAS! */}
      <TextInput>Escreva aqui!</TextInput>
      <Text>Hello, World!</Text>
      <Image source={require('./assets/favicon.png')}></Image>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});