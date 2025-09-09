import {useState} from 'react';
import { StyleSheet, Text, View, Alert, Image, TextInput, Button, Switch } from 'react-native';

export default function App() {
  const [user, setUser] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [bgColor, setBgColor] = useState('#fff');
  const [textColor, setTextColor] = useState('black');

  function toggleSwitch() {
    setIsEnabled(prev => {
      const newValue = !prev;
      setBgColor(newValue ? 'black' : 'white');
      setTextColor(newValue ? 'white' : 'black');
      return newValue;
    });
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {/*Um Switch sempre vai ficar inlaterável se não ocorrer a implementação de useState*/}
        <Switch 
          value={isEnabled}
          onValueChange={toggleSwitch}
          thumbColor={isEnabled ? 'pink' : 'lightgray'}
          trackColor={{false: 'lightpink', true: 'hotpink'}}
        />
    
      {/*Componente Text disfarçado de botão com interação onTouch + Alert (mensagens que aparecem na tela da aplicação)*/}
        <View
          onTouchStart={(e) => {
            Alert.alert('TOQUE', 'Clique iniciado, solte o dedo para finalizar');
          }}
          onTouchEnd={(e) => {
            Alert.alert('TOQUE', 'Clique finalizado');
          }}
        >
          <Text style={styles.button}>Clique e segure aqui!</Text>
        </View>

      {/*Texto selecionável com selectable={}*/}
        <Text style={{ color: textColor }} selectable={true}>Sou um texto selecionável</Text>
      
      {/*Exemplos de como a concatenação funciona através do componente Text*/}
        <Text>
          <Text style={styles.firstText}>Somos textos concatenados</Text>
          <Text style={styles.secondText}>(englobados por um Text)</Text>
        </Text>
        <View style={styles.smallContainer}>
          <Text style={styles.firstText}>Somos textos não concatenados</Text>
          <Text style={styles.secondText}>(englobados por uma View)</Text>
        </View>

      {/*Array de estilos para componentes com personalização específica*/}
        <Text style={[styles.button, styles.firstText]}>Sou um texto com dois styles</Text>
      
      {/*Evento onChange() captura o texto do input e joga no terminal de forma dinâmica*/}
        <View style={styles.smallContainer}>
          <TextInput
            style={styles.input}
            onChange={(e)=>console.log(e.nativeEvent.text)}
            keyboardType="email-address"
            placeholder="Esse é um input para email"
            placeholderTextColor={textColor}
          />
          <TextInput
            style={styles.input}
            onChange={(e)=>console.log(e.nativeEvent.text)}
            keyboardType="numeric"
            placeholder="Esse é um input para números"
            placeholderTextColor={textColor}
          />
        {/*Se utiliza useState para atribuir a variável user a cada mudança de texto feita no input*/}
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUser(text)}
            keyboardType='default'
            placeholder="O que escrever aqui será mostrado no botão"
            placeholderTextColor={textColor}
            value={user}
          />

          <Button
            title='Clique Aqui'
            onPress={() => Alert.alert('Valor atual', user)}
          /> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  smallContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 15,
    backgroundColor: 'pink',
    fontWeight: 'bold',
    padding: 10,
    color: 'white'
   },
   firstText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red'
   },
   secondText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue'
   },
   input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'pink',
    padding: 10,
    margin: 5,
    borderRadius: 8
   }
});