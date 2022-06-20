import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';


/* =============================================================================
<Text />
============================================================================= */
const Text = ({
  h1,
  h2,
  h3,
  xl,
  lg,
  md,
  sm,
  xs,
  bold,
  white,
  light,
  flex,
  placeholder,
  medium,
  style,
  center,
  primary,
  normal,
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        xl && styles.xl,
        lg && styles.lg,
        md && styles.md,
        sm && styles.sm,
        xs && styles.xs,
        white && styles.white,
        bold && styles.bold,
        light && styles.light,
        medium && styles.medium,
        center && styles.center,
        primary && styles.primary,
        normal && styles.normal,
        flex && styles.flex,
        placeholder && styles.placeholder,
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  h1: {
    fontSize: 40,
    fontFamily: 'Poppins-ExtraBold',
  },
  h2: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  h3: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
  },
  xl: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  lg: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  md: {
    fontSize: 16,
  },
  sm: {
    fontSize: 14,
  },
  xs: {
    fontSize: 11,
  },
  thin: {
    fontFamily: 'Poppins-Light',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  normal: {
    fontFamily: 'Poppins-SemiBold',
  },
  white: {
    color: '#fff',
  },
  light: {
    color: '#fff',
    fontFamily: 'Poppins-Light',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  flex: {
    flex: 1,
  },
  center: {
    textAlign: 'center',
  },
  primary: {
    color: '#fff',
  },
  placeholder: {
    color: '#fff',
  },
});

/* Export
============================================================================= */
export default Text;
