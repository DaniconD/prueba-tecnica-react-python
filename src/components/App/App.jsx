import React, { useState } from 'react';
import * as Styled from './App.styled'

import CommunitiesList from '../Organism/CommunitiesList';
import CommunitiesForm from '../Organism/CommunitiesForm';

function App() {
  const [community, setCommunity] = useState('');

  const communityHandler = (value) => {
    setCommunity(value)
  }

  const deleteComunity = () => {
    setCommunity('')
  }

  return (
    <Styled.Container>
      <CommunitiesList deleteComunity={deleteComunity} communityHandler={communityHandler}/>
      <CommunitiesForm community={community} communityHandler={communityHandler} />
    </Styled.Container>
  );
}

export default App;
