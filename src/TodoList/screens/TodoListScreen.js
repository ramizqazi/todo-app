import React, { useCallback, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, Content, Text } from '../../common';
import TodoList from '../components/TodoList';

/* =============================================================================
<TodoListScreen />
============================================================================= */
const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  const _handleTodoAdd = (text) => {
    const payload = {
      id: Math.floor(Math.random() * 13434300),
      text,
      isChecked: false,
    }
    setTodos((prevState) => [payload, ...prevState])
  };

  const _handleItemClick = (item) => {
    const filteredTodos = todos.filter((todo) => todo.id !== item.id)
    const payload = {
      id: item.id,
      text: item.text,
      isChecked: true,
    };
    console.log(filteredTodos)
    setTodos([payload, ...filteredTodos])
  }

  return (
    <Container>
      <StatusBar translucent barStyle='light-content' backgroundColor='transparent' />
      <Content contentContainerStyle={styles.content}>
        <Text h1 center>TodoList</Text>
        <TodoList todos={todos} addTodo={_handleTodoAdd} onItemClick={_handleItemClick} />
      </Content>
    </Container>
  );
};

const getStyles = (insets) => StyleSheet.create({
  content: {

    marginTop: insets.top + 40,
  },
})

/* Export
============================================================================= */
export default TodoListScreen;
