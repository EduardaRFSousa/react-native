import { StyleSheet, Text, View, Alert, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
        <Text selectable={true}>Sou um texto selecionável</Text>
      
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
        />
        <TextInput
          style={styles.input}
          onChange={(e)=>console.log(e.nativeEvent.text)}
          keyboardType="numeric"
          placeholder="Esse é um input para números"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
