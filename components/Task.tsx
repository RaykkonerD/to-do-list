import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IProps {
    index: number, 
    content: string, 
    handleEditTask: (index: number) => void, 
    handleDeleteTask: (index: number) => void
}

export default function Task({ index, content, handleEditTask, handleDeleteTask }: IProps){
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="black"
        text={content}
        style={styles.checkbox}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={styles.text}
      />
      <TouchableOpacity onPress={() => handleEditTask(index)}>
        <MaterialCommunityIcons name="pencil-circle-outline" size={29} color="black" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => handleDeleteTask(index)}>
        <Text style={styles.deleteButtonText}>x</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%'
  },
  checkbox: {
    maxWidth: '80%'
  },
  text: {
    color: 'black',
    marginRight: 10,
    fontSize: 16,
    alignItems: 'center'
  },
  deleteButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderWidth: 2,
    borderRadius: 100
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 600,
    textAlign: 'center'
  }
});