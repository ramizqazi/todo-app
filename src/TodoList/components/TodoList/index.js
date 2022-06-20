import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Text, TextInput, View } from '../../../common';
import TodoListItem from './TodoListItem';

/* =============================================================================
<TodoList />
============================================================================= */
const TodoList = ({ todos, addTodo, onItemClick }) => {
  const [txtInput, setTxtInput] = useState('');

  const _handleAddPress = () => {
    if (txtInput) {
      addTodo(txtInput)
      setTxtInput('');
    };
  };

  return (
    <View>
      <View horizontal style={styles.header}>
        <TextInput placeholder='Enter Todo...' value={txtInput} onChange={setTxtInput} />
        <Button title='Add' onPress={_handleAddPress} />
      </View>
      {todos?.map((todo) => <TodoListItem key={todo.id} todo={todo} onItemClick={onItemClick} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginBottom: 20,
  },
})

/* Export
============================================================================= */
export default TodoList;
