import React from 'react';
import CheckBox from 'react-native-check-box'
import { StyleSheet } from 'react-native';
import { Card, Text } from '../../../common';


/* =============================================================================
<TodoListItem />
============================================================================= */
const TodoListItem = ({ todo, onItemClick }) => {
  const todoTxt = todo?.text;
  const isChecked = todo?.isChecked;

  const _handleClick = () => {
    if (!isChecked) {
      onItemClick(todo);
    }
  };
  return (
    <Card style={styles.container} width='100%' onPress={_handleClick}>
      <CheckBox
        onClick={() => null}
        isChecked={isChecked}
        checkBoxColor="#0091D6"
        uncheckedCheckBoxColor='#999'
      />
      <Text style={styles.txt}>{todoTxt}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  txt: {
    marginLeft: 20,
    color: '#000',
  }
})

/* Export
============================================================================= */
export default TodoListItem;
