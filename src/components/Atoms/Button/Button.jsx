import React from 'react'

import * as Styled from './Button.styled'

function Button({ look, onClick, children }) {
  return (
    <Styled.Button look={look} onClick={onClick}>
      {children}
    </Styled.Button>
  )
}

export default Button