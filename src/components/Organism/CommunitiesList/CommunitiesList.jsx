import React from 'react'
import Button from '../../Atoms/Button'
import ListCard from '../../Molecules/ListCard'
import ListElement from '../../Molecules/ListElement'

import { IoMdClose, IoMdAdd } from 'react-icons/io'
import { MdFileCopy } from 'react-icons/md'
import * as Styled from './CommunitiesList.styled'


function CommunitiesList({ deleteComunity, communityHandler }) {
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Communities</h1>
        <Button onClick={() => {console.log('Clear form')}}><IoMdAdd /></Button>
      </Styled.Header>
      <ListCard>
        <ListElement>
          <h2>Name</h2>
        </ListElement>
        <ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler('1')} ><MdFileCopy /></Button>
          </div>
        </ListElement>
        <ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler('2')}><MdFileCopy /></Button>
          </div>
        </ListElement>
        <ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler('adawd')}><MdFileCopy /></Button>
          </div>
        </ListElement>
        <ListElement>
          <b>Community name</b>
          <div>
            <Button look='delete' onClick={deleteComunity} ><IoMdClose /></Button>
            <Button look='show' onClick={() => communityHandler(':D')} ><MdFileCopy /></Button>
          </div>
        </ListElement>
      </ListCard>
    </Styled.Container>
  )
}

export default CommunitiesList