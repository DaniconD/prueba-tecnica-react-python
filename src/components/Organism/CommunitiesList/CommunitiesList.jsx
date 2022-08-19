import React from 'react'
import Button from '../../Atoms/Button'
import ListCard from '../../Molecules/ListCard'
import ListElement from '../../Molecules/ListElement'

import { IoMdClose, IoMdAdd } from 'react-icons/io'
import { MdFileCopy } from 'react-icons/md'
import * as Styled from './CommunitiesList.styled'

import * as CommunityServer from '../../../data/CommunityServer'

function CommunitiesList({ communities, resetForm, serverList, communityHandler }) {
  
  const handleDelete = async (communityId) => {
    await CommunityServer.deleteCommunity(communityId);
    serverList();
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Communities</h1>
        <Button onClick={resetForm}><IoMdAdd /></Button>
      </Styled.Header>
      <ListCard>
        <ListElement>
          <h2>Name</h2>
        </ListElement>
        {communities.length === 0 ?
          <ListElement>
            <b>Add a community...</b>
          </ListElement> 
          : 
          <List communities={communities} handleDelete={handleDelete} communityHandler={communityHandler} />
        }
      </ListCard>
    </Styled.Container>
  )
}

const List = ({ communities, handleDelete, communityHandler }) => {
  return communities.map((item, index) =>
    <ListElement key={index}>
      <b>{item.name}</b>
      <div>
        <Button look='delete' onClick={() => item.id && handleDelete(item.id)} ><IoMdClose /></Button>
        <Button look='show' onClick={() => communityHandler(index)} ><MdFileCopy /></Button>
      </div>
    </ListElement>
  )
}

export default CommunitiesList