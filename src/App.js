import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TodoListScreen from './TodoList/screens/TodoListScreen'

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return <SafeAreaProvider><TodoListScreen /></SafeAreaProvider>;
};

/* Export
============================================================================= */
export default App;
