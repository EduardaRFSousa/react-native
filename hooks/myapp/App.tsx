import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native';

/* Conveniência de declaração prévia do estado inicial pro useReducer*/
const counterInitialState = {
  counter: 0,
};

/* Função com declaração dos objetos utilizados (estado do counter e ação chamada) 
e switch que executa o escopo referenciado pelo tipo do parâmetro de ação passado (action.type) */
const counterReducer = (state: typeof counterInitialState, action: {type: string;}) => {
  switch (action.type) {
    case 'increment': return { counter: state.counter + 1 };
    case 'decrement': return { counter: state.counter - 1 };
    default: return state;
  }
}

type Task = {
  name: string;
  isDone: boolean;
}

const taskReducer = (state: {tasks: Task[]}, action: {type: string, task?: string}) => {
  switch (action.type) {
    case 'add-new-task': return { tasks: [...state.tasks, {name: action.task ?? '', isDone: false}] };
    default: return state;
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
  const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState);

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
      counterDispatch({ type: 'increment' });
  }

  const decrementReducer = () => {
      counterDispatch({ type: 'decrement' });
  }

  const [taskState, taskDispatch] = useReducer(taskReducer, {tasks: []});
  const [inputValue, setInputValue] = useState(""); 
  
  const handlePressTask = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    } else {
      console.log(`New Task: ${inputValue}`);
      taskDispatch({ type: 'add-new-task', task: inputValue });
    }
    setInputValue(''); 
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'hotpink', fontWeight: 'bold' }}>Counter with useState</Text>
        <Text style={{ fontSize: 20 }}>{count}</Text>
        <View style={{ flexDirection: 'row', columnGap: 5 }}>
          <Button color='hotpink' title='-' onPress={decrement}></Button>
          <Button color='black' title='+' onPress={increment}></Button>
        </View>
      </View>  
      
      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'hotpink', fontWeight: 'bold' }}>Counter with useReducer</Text>
        <Text style={{ fontSize: 20 }}>{counterState.counter}</Text>
        <View style={{ flexDirection: 'row', columnGap: 5 }}>
          <Button color='hotpink' title='-' onPress={decrementReducer}></Button>
          <Button color='black' title='+' onPress={incrementReducer}></Button>
        </View>
      </View>

      <View style={styles.smallContainer}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Task List</Text>
        <TextInput 
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity onPress={handlePressTask}>
          <Text style={styles.button}>Add Task</Text>
        </TouchableOpacity>
      
        {taskState.tasks.map((task, index) => (
          <Text key={index}>{task.name}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  smallContainer: {
    rowGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
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