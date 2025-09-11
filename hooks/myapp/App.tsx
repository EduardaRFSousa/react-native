import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const initialState = {
  counter: 0,
};

const reducer = (
    state: {counter: number;}, 
    action: {type: string;}) => {

  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (count < 0) {
      Alert.alert('useEffect', 'Count cannot be negative', [{ text: 'OK', onPress: () => setCount(0) }]);
    } else console.log(`Count is now: ${count}`);
  }, [count]);

const decrement = () => {
    setCount((count) => count - 1);
}

const increment = () => {
    setCount((count) => count + 1);
}

const incrementReducer = () => {
    dispatch({ type: 'increment' });
}

const decrementReducer = () => {
    dispatch({ type: 'decrement' });
}

  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'hotpink', fontWeight: 'bold' }}>Counter with useState:</Text>
        <Text style={{ fontSize: 20 }}>{count}</Text>
        <View style={{ flexDirection: 'row', columnGap: '5' }}>
          <Button color='hotpink' title='-' onPress={() => decrement()}></Button>
          <Button color='black' title='+' onPress={() => increment()}></Button>
        </View>
      </View>  
    
      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'hotpink', fontWeight: 'bold' }}>Counter with useReducer:</Text>
        <Text style={{ fontSize: 20 }}>{state.counter}</Text>
        <View style={{ flexDirection: 'row', columnGap: '5' }}>
          <Button color='hotpink' title='-' onPress={() => decrementReducer()}></Button>
          <Button color='black' title='+' onPress={() => incrementReducer()}></Button>
        </View>
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
    gap: 100
  },
  smallContainer: {
    rowGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});