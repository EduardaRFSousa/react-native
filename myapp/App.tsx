// Hook utilizado para realizar a troca de estado de um componente
import React, {useState} from 'react';
// Componentes utilizados para construir a página, importados do React Native
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
// Componente StatusBar serve para configurar a barrinha superior da tela (Experimente trocar o style 'dark' por 'light')
import { StatusBar } from 'expo-status-bar';

// ATENÇÃO: Todas as tags de componentes começam em maiúsculo!
/* Sobre o RETURN da function App (função de chamada da aplicação):
O return só pode retornar um único componente (<View>), que é 
uma div gigante que funciona como o elemento <html> */
export default function App() {
  /* NOTA IMPORTANTE: A alteração de estilo de componentes de forma DINÂMICA 
  em React Native é feita através da mudança de ESTADO ao invés de variáveis comuns, 
  nesse caso é utilizado o useState para criar o estado isActive (padrão false) 
  e a função setIsActive para alterá-lo. */

  /* PADRÃO DE ESCRITA DO USESTATE:
  - isActive: variável utilizada;
  - setIsActive: função a ser chamada; 
  - useState: declaração do hook;
  - false: valor padrão da variável;*/
  const [isActive, setIsActive] = useState(false);
  
  // callback: função anônima dentro de setIsActive() dentro de handlePress()
  function handlePress() {
    setIsActive((oldValue:boolean) => { 
      return !oldValue; 
    });
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      {/* Comentários dentro do componente view principal são
       tratados como objeto, ou seja, é obrigatório as ASPAS! */}
      <Text style={isActive? {color: 'white'} : {color: 'black'}}>Troca de estado com React Native</Text>
      <Text style={isActive? {color: 'white'} : {color: 'black'}}>Dica: Clique no coração!</Text>

      {/* Recomendado utilizar require() ao invés de importar o arquivo*/}
      <TouchableOpacity onPress={handlePress}>
        <Image source={isActive ? require('./assets/coracaovermelho.png') : require('./assets/coracaovazio.png')}></Image>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});