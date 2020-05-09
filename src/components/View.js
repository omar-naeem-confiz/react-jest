import React from 'react';

export const View = (props) => {
  const { style, children, ...rest } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
