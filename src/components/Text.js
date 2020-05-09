import React from 'react';
import { View } from '.';

export const Text = (props) => {
  const { children, style, ...rest } = props;
  return (
    <View
      style={{
        color: 'rgba(0,0,0,0.87)',
        fontSize: 16,
        ...style
      }}
      {...rest}
    >
      {children}
    </View>
  )
}
