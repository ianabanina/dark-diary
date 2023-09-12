import React from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';

export function Text(props: TextProps) {
  const {style, ...rest} = props;

  return <RNText style={[style, styles.text]} {...rest} />;
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginBottom: 12,
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 20,
  },
});
