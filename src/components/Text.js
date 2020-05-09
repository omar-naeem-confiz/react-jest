import React from 'react';
import { View } from '.';

export const Text = (props) => {
  const { children, style } = props;
  return (
    <View
      style={{
        color: 'rgba(0,0,0,0.87)',
        fontSize: 16,
        ...style
      }}
    >
      {children}
    </View>
  )
}
