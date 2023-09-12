import React from 'react';
import {Button as RNButton, ButtonProps} from 'react-native';
import {COLORS} from '../../app/styles/Base.styles';

export function Button(props: ButtonProps) {
  const {color, ...rest} = props;

  return <RNButton color={COLORS.primaryLight || color} {...rest} />;
}
