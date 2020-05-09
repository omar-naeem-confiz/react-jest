import React from 'react';
import { View, Text } from '.';

export const Input = (props) => {
  const { label, value, onChange, style } = props;
  const { width, ...remainingStyle } = style;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        ...remainingStyle
      }}
    >
      <Text
        style={{
          fontSize: 14,
          paddingBottom: 4
        }}
      >
        {label}
      </Text>
      <input
        style={{
          backgroundColor: 'white',
          height: 48,
          paddingRight: 16,
          paddingLeft: 16,
          fontSize: 24,
          borderRadius: 4,
          border: 'solid 2px #9d9fa2',
          width
        }}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </View>
  )
}
