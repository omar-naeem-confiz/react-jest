import React from 'react';
import { View, Text } from '.';

export const List = (props) => {
  const { children, style } = props;
  return (
    <View
      style={{
        flexDirection: 'column',
        margin: 20,
        marginTop: 0,
        ...style
      }}
    >
      {children}
    </View>
  )
}
