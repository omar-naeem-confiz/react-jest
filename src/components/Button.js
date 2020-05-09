import React from 'react';
import { Text } from '.';

export const Button = (props) => {
  const { label, onClick, style } = props;
  return (
    <button
      style={{
        backgroundColor: '#017acd',
        height: 54,
        minWidth: 127,
        padding: 10,
        paddingRight: 40,
        paddingLeft: 40,
        borderRadius: 6,
        ...style
      }}
      onClick={onClick}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold'
        }}
      >
        {label}
      </Text>
    </button>
  )
}
