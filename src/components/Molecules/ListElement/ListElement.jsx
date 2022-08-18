import React from 'react'

import * as Styled from './ListElement.styled'

function ListElement({ children }) {
  return (
    <Styled.ListElement>
      {children}
    </Styled.ListElement>
  )
}

export default ListElement