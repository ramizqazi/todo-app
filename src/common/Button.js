import React from 'react';
import { StyleSheet, Pressable, Text, ActivityIndicator } from 'react-native';


/* =============================================================================
<Button />
============================================================================= */
const Button = ({ loading, title, variant, size, style, btnTxtStyles, onPress }) => {

  const _handlePress = () => {
    if (typeof onPress === 'function') {
      onPress();
    };
  };

  return (
    <Pressable style={[
      styles.container,
      size === 'sm' && styles.sm,
      size === 'lg' && styles.lg,
      variant === 'primary' && styles.primary,
      variant === 'secondary' && styles.secondary,
      style,
    ]}
      onPress={_handlePress}
    >
      {loading ? <ActivityIndicator color='#fff' /> : null}
      {!loading && (
        <Text
          style={[
            styles.title,
            variant === 'primary' && styles.titlePrimary,
            variant === 'secondary' && styles.titleSecondary,
            btnTxtStyles
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'lg'
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    borderWidth: 1,
    // borderColor: Colors.primary,
    // backgroundColor: Colors.primary,
  },
  secondary: {
    borderWidth: 1,
    // borderColor: Colors.primary,
    backgroundColor: 'transparent',
  },
  lg: {
    width: '100%',
    paddingVertical: 16,
  },
  sm: {
    width: 190,
    paddingVertical: 13,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    // color: Colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  titlePrimary: {
    // color: Colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  titleSecondary: {
    // color: Colors.primary,
    fontFamily: 'Poppins-SemiBold',
  },
});

/* Export
============================================================================= */
export default Button;
