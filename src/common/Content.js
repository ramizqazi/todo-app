import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';


/* =============================================================================
<Content />
============================================================================= */
const Content = ({
  center,
  children,
  containerStyle,
  contentContainerStyle,
  keyboardAvoidingViewProps,
  ...props
}) => (
  <ScrollView
    style={[styles.container, containerStyle]}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[
      styles.contentContainer,
      center && styles.center,
      contentContainerStyle,
    ]}
    {...props}>
    {children}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f03fc',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    backgroundColor: '#7f03fc',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* Export
============================================================================= */
export default Content;
