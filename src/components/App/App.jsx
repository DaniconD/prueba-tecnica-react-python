import React, { useState } from 'react';
import * as Styled from './App.styled'

import CommunitiesList from '../Organism/CommunitiesList';
import CommunitiesForm from '../Organism/CommunitiesForm';

function App() {
  const [communities, setcommunities] = useState([
    {
      name: 'Instituto Tecnologico de Ciudad Guzman',
      category: 'tec',
      parent_community: 'tec nacional',
      short_description: 'prueba',
      description: 'fawfawfafawfafafa',
    },
    {
      name: 'CUsur',
      category: 'asda',
      parent_community: 'dwada',
      short_description: 'OwO',
      description: 'dawdawdawdawdwafawf',
    },
  ]);
  const [currentCommunity, setCurretnCommunity] = useState(communities[0])

  const resetForm = () => {
    setCurretnCommunity({
      name: '',
      category: '',
      parent_community: '',
      short_description: '',
      description: '',
    })
  }

  const updateComunity = (updated) => {
    setcommunities([
      ...communities,
      updated
    ])
  }

  const communityHandler = (value) => {
    setCurretnCommunity(communities[value])
  }

  const deleteComunity = (value) => {
    setcommunities([...communities.filter((_, index) => index !== value)])
  }

  return (
    <Styled.Container>
      <CommunitiesList communities={communities} resetForm={resetForm} deleteComunity={deleteComunity} communityHandler={communityHandler}/>
      <CommunitiesForm currentCommunity={currentCommunity} updateComunity={updateComunity} />
    </Styled.Container>
  );
}

export default App;
