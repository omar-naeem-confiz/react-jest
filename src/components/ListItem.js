import React from 'react';
import { View, Text, Button } from '.';

export const ListItem = (props) => {
  const { children, style, onCancel } = props;
  return (
    <View
      style={{
        padding: 20,
        boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.2)',
        borderRadius: 4,
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
        justifyContent: 'space-between',
        ...style
      }}
    >
      <Text>
        {children}
      </Text>
      <Text
        style={{
          cursor: 'pointer',
          marginLeft: 20
        }}
        onClick={onCancel}
      >
        ×
      </Text>
    </View>
  )
}
