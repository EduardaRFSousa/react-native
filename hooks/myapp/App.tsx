import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if(count > 0){
        setCount((count) => count - 1 );
    } else Alert.alert('Atenção!', 'Não é possível diminuir mais que zero');
  }

  const increment = () => {
    setCount((count) => count + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{count}</Text>
      <View style={{ flexDirection: 'row', columnGap: '5' }}>
        <Button title='-' onPress={() => decrement()}></Button>
        <Button title='+' onPress={() => increment()}></Button>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
});
