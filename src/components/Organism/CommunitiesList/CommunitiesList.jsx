import React from 'react'
import Button from '../../Atoms/Button'

import { IoMdClose, IoMdAdd } from 'react-icons/io'
import { MdFileCopy } from 'react-icons/md'
import * as Styled from './CommunitiesList.styled'


function CommunitiesList({ deleteComunity, communityHandler }) {
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Communities</h1>
        <Button onClick={() => {console.log('New community created')}}><IoMdAdd /></Button>
      </Styled.Header>
      <Styled.ListCard>
        <Styled.ListElement><h2>Name</h2></Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler('1')} ><MdFileCopy /></Button>
          </div>
        </Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler('2')}><MdFileCopy /></Button>
          </div>
        </Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler('adawd')}><MdFileCopy /></Button>
          </div>
        </Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler(':D')} ><MdFileCopy /></Button>
          </div>
        </Styled.ListElement>
      </Styled.ListCard>
    </Styled.Container>
  )
}

export default CommunitiesList