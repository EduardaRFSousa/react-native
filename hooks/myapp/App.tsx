import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

/* Conveniência de declaração prévia do estado inicial pro useReducer*/
const initialState = {
  counter: 0,
};

/* Função com declaração dos objetos utilizados (estado do counter e ação chamada) 
e switch que executa o escopo referenciado pelo tipo do parâmetro de ação passado (action.type) */
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

const listener = (state: {tasks: string[]}, action: {type: string, task?: string}) => {
  switch (action.type) {
    case 'add-new-task':
      return { 
        tasks: [...state.tasks, {name: action.inputValue, isDone: false}] 
      };
    default:
      break;
  }
}

export default function App() {

  /* USE STATE: Serve para guardar valores que mudam com o tempo (estado).
     - count → valor atual.
     - setCount → função que muda esse valor.*/
  const [count, setCount] = useState(0);

  /* USE REDUCER: Serve para gerenciar estados mais complexos.
      - state → o estado atual (igual ao count do useState).
      - dispatch → uma função que você chama para dizer o que quer fazer com esse estado.
      - reducer → uma função que recebe o estado atual + a ação, e decide qual será o novo estado.
      - initialState → o valor inicial do estado. */
  const [state, dispatch] = useReducer(reducer, initialState);

  /* USE EFFECT: É usado para executar efeitos colaterais → coisas que não fazem parte do "desenho da tela".
      - Vigia o elemento posto como parâmetro (nesse caso counter) */
  useEffect(() => {
    if (count < 0) {
      Alert.alert('useEffect', 'Count cannot be negative', [{ text: 'OK', onPress: () => setCount(0) }] );
    } else console.log(`Count is now: ${count}`);
  }, [count]);

  const decrement = () => {
      setCount((count) => count - 1);
  }

  const increment = () => {
      setCount((count) => count + 1);
  }

  /* No useReducer, ao invés da ação ser realizada no escopo da função de evento, ele chama um dos casos do switch() */
  const incrementReducer = () => {
      dispatch({ type: 'increment' });
  }

  const decrementReducer = () => {
      dispatch({ type: 'decrement' });
  }

  const [state, dispatch] = useReducer(listener, {tasks: []});
  const [inputValue, setInputValue] = useState(""); 
  
  const handlePressTask = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    } else {
      console.log(`New Task: ${inputValue}`);
      dispatch({ type: 'add-new-task', inputValue });
    }
    setInputValue(''); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'hotpink', fontWeight: 'bold' }}>Counter with useState</Text>
        <Text style={{ fontSize: 20 }}>{count}</Text>
        <View style={{ flexDirection: 'row', columnGap: '5' }}>
          <Button color='hotpink' title='-' onPress={() => decrement()}></Button>
          <Button color='black' title='+' onPress={() => increment()}></Button>
        </View>
      </View>  
    
      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'hotpink', fontWeight: 'bold' }}>Counter with useReducer</Text>
        <Text style={{ fontSize: 20 }}>{state.counter}</Text>
        <View style={{ flexDirection: 'row', columnGap: '5' }}>
          <Button color='hotpink' title='-' onPress={() => decrementReducer()}></Button>
          <Button color='black' title='+' onPress={() => incrementReducer()}></Button>
        </View>
      </View>

      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Task List</Text>
        <TextInput 
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
        ></TextInput>
        <TouchableOpacity onPress={() => handlePressTask()}>
          <Text style={styles.button}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {state.tasks.map((task, index) => (
        <Text key={index} style={{ fontSize: 16 }}>{task.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  smallContainer: {
    rowGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    borderColor: 'hotpink',
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'hotpink',
    color: 'white',
    width: 200,
    height: 30,
    textAlign: 'center',
    paddingTop: 5,
    borderRadius: 8
  }
});