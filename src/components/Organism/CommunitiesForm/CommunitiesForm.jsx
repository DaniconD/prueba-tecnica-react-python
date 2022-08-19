import React, { useState, useEffect } from 'react'
import InputButton from '../../Atoms/InputButton';

import NoImage from '../../../assets/no-picture-available.jpg'
import * as Styled from './CommunitiesForm.styled'

function CommunitiesForm({ currentCommunity, updateComunity }) {
  const [community, setCommunity] = useState(currentCommunity);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    console.log('Form submited')
    e.preventDefault();

    updateComunity(community);
  }

  useEffect(() => {
    setCommunity(currentCommunity);
    console.log('Updated')
  },[currentCommunity])

  return (
    <Styled.Container>
      <Styled.Form action="" onSubmit={handleSubmit}>
        <Styled.FieldsContainer>
          <Styled.LeftFields>
            <Styled.Field>
              <label>Name<span>*</span></label>
              <input type="text" name="name" id="name" value={community.name} onChange={(e) => setCommunity({...community, name: e.target.value})} required />
            </Styled.Field>
            <Styled.Field>
              <label>Category</label>
              <input type="text" name="category" id="category" value={community.category} onChange={(e) => setCommunity({...community, category: e.target.value})} />
            </Styled.Field>
            <Styled.Field>
              <label>Parent Community</label>
              <input type="text" name="parent_community" id="parent_community" value={community.parent_community} onChange={(e) => setCommunity({...community, parent_community: e.target.value})} />
            </Styled.Field>
          </Styled.LeftFields>
          <Styled.RightFields>
            <img src={image ? URL.createObjectURL(image) : NoImage} alt="img" />
            <Styled.ImageLabel>
              <InputButton type="file" name="image" accept="image/png, image/gif, image/jpeg" onChange={e => setImage(e.target.files[0])} />
              SELECT IMAGE
            </Styled.ImageLabel>
          </Styled.RightFields>
        </Styled.FieldsContainer>
        <Styled.Field>
          <label>Short Description<span>*</span></label>
          <input type="text" name="short_description" id="short_description" value={community.short_description} onChange={(e) => setCommunity({...community, short_description: e.target.value})} required />
        </Styled.Field>
        <Styled.Field area >
          <label>Description</label>
          <textarea name="description" id="description" cols="30" rows="10" value={community.description} onChange={(e) => setCommunity({...community, description: e.target.value})} ></textarea>
        </Styled.Field>
        <InputButton type="submit" value="SUBMIT" style={{ marginRight: '15px' }} />
      </Styled.Form>
    </Styled.Container>
  )
}

export default CommunitiesForm