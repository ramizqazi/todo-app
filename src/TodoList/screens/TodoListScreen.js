import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, Content, Text } from '../../common';

/* =============================================================================
<TodoListScreen />
============================================================================= */
const TodoListScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return (
    <Container>
      <StatusBar translucent barStyle='light-content' backgroundColor='transparent' />
      <Content contentContainerStyle={styles.content}>
        <Text h1 center>TodoList</Text>
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
