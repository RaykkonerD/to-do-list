import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Task from './components/Task';

interface IRenderProps {
  item: string,
  index: number
}

export default function ToDo() {
  const [tasks, setTasks] = useState<string[]>(["Fazer as compras", "Correr 6km"]);
  const [value, setValue] = useState<string>('');

  const handleAddTask = () => {
    setTasks([...tasks, value !== '' ? value : '(empty)']);
    setValue('');
  };

  const handleEditTask = (index: number) => {
    const task = tasks[index];
    setValue(task);
    handleDeleteTask(index);
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks].filter((el, i) => i != index);
    setTasks(newTasks);
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>ToDo List</Text>
          <View style={styles.upperContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={value}
                placeholder="(empty)"
                placeholderTextColor="grey"
                maxLength={100}
                onChangeText={setValue}
                onSubmitEditing={handleAddTask}
              />
              <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.charsWarn}>
              {value.length == 100
                ? '(no more memory available - new chars will not be saved)'
                : '(' + (100 - value.length) + ' chars)'}
            </Text>
          </View>
        </View>}
      data={tasks}
      renderItem={({item, index}: IRenderProps) => (
        <Task
          index={index}
          content={item}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
  },
  upperContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row'
  },
  input: {
    paddingHorizontal: 5,
    height: 40,
    borderWidth: 1,
    flex: 1
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
  },
  charsWarn: {
    marginTop: 5,
    fontSize: 10,
    color: 'grey'
  },
});
