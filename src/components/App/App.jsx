import React, { useEffect, useState } from 'react';
import * as Styled from './App.styled'

import CommunitiesList from '../Organism/CommunitiesList';
import CommunitiesForm from '../Organism/CommunitiesForm';

import * as CommunityServer from '../../data/CommunityServer'

function App() {
  const [communities, setcommunities] = useState([]);
  const [action, setAction] = useState('submit')

  const serverList = async () => {
    try {
      const res = await CommunityServer.listCommunities();
      const data = await res.json()
      setcommunities(data.communities)
    } catch (error) {
      console.log(error)
    }
  }

  const [currentCommunity, setCurretnCommunity] = useState({
    name: '',
    category: '',
    parent_community: '',
    short_description: '',
    description: '',
  })
  
  const resetForm = () => {
    setAction('submit')
    setCurretnCommunity({
      name: '',
      category: '',
      parent_community: '',
      short_description: '',
      description: '',
    })
  }
  
  const communityHandler = (value) => {
    setAction('edit')
    setCurretnCommunity(communities[value])
  }
  
  useEffect(() => {
    serverList();
  },[])

  return (
    <Styled.Container>
      <CommunitiesList communities={communities} resetForm={resetForm} serverList={serverList} communityHandler={communityHandler}/>
      <CommunitiesForm currentCommunity={currentCommunity} action={action} />
    </Styled.Container>
  );
}

export default App;
