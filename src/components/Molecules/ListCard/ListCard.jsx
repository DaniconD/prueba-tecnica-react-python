import React from 'react'

import * as Styled from './ListCard.styled'

function ListCard({ children }) {
  return (
    <Styled.ListCard>
      {children}
    </Styled.ListCard>
  )
}

export default ListCard