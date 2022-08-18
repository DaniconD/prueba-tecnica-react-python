import React from 'react'

import * as Styled from './CommunitiesList.styled'
import { IoMdClose, IoMdAdd } from 'react-icons/io'
import { MdFileCopy } from 'react-icons/md'

function CommunitiesList({ deleteComunity, communityHandler }) {

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Communities</h1>
        <Styled.Button onClick={() => {console.log('New community created')}}><IoMdAdd /></Styled.Button>
      </Styled.Header>
      <Styled.ListCard>
        <Styled.ListElement><h2>Name</h2></Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Styled.Button delete onClick={deleteComunity} ><IoMdClose /></Styled.Button>
            <Styled.Button show onClick={() => communityHandler('1')} ><MdFileCopy /></Styled.Button>
          </div>
        </Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Styled.Button delete onClick={deleteComunity} ><IoMdClose /></Styled.Button>
            <Styled.Button show onClick={() => communityHandler('2')}><MdFileCopy /></Styled.Button>
          </div>
        </Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Styled.Button delete onClick={deleteComunity} ><IoMdClose /></Styled.Button>
            <Styled.Button show onClick={() => communityHandler('adawd')}><MdFileCopy /></Styled.Button>
          </div>
        </Styled.ListElement>
        <Styled.ListElement>
          <b>Community name</b>
          <div>
            <Styled.Button delete onClick={deleteComunity} ><IoMdClose /></Styled.Button>
            <Styled.Button show onClick={() => communityHandler(':D')} ><MdFileCopy /></Styled.Button>
          </div>
        </Styled.ListElement>
      </Styled.ListCard>
    </Styled.Container>
  )
}

export default CommunitiesList