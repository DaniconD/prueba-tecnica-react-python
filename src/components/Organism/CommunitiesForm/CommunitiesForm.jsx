import React, { useState } from 'react'
import InputButton from '../../Atoms/InputButton';

import NoImage from '../../../assets/no-picture-available.jpg'
import * as Styled from './CommunitiesForm.styled'

function CommunitiesForm({ community, communityHandler }) {
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    console.log('Form submited')
    e.preventDefault();

    communityHandler('');
  }

  return (
    <Styled.Container>
      <Styled.Form action="" onSubmit={handleSubmit}>
        <Styled.FieldsContainer>
          <Styled.LeftFields>
            <Styled.Field>
              <label>Name<span>*</span></label>
              <input type="text" name="name" id="name" value={community} onChange={(e) => communityHandler(e.target.value)} required />
            </Styled.Field>
            <Styled.Field>
              <label>Category</label>
              <input type="text" name="category" id="category" />
            </Styled.Field>
            <Styled.Field>
              <label>Parent Community</label>
              <input type="text" name="parent_community" id="parent_community" />
            </Styled.Field>
          </Styled.LeftFields>
          <Styled.RightFields>
            <img src={image ? URL.createObjectURL(image) : NoImage} alt="img" />
            <InputButton type="file" name="image" accept="image/png, image/gif, image/jpeg" onChange={e => setImage(e.target.files[0])} />
          </Styled.RightFields>
        </Styled.FieldsContainer>
        <Styled.Field>
          <label>Short Description<span>*</span></label>
          <input type="text" name="short_description" id="short_description" required />
        </Styled.Field>
        <Styled.Field area >
          <label>Description</label>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </Styled.Field>
        <InputButton type="submit" value="SUBMIT" style={{ marginRight: '15px' }} />
      </Styled.Form>
    </Styled.Container>
  )
}

export default CommunitiesForm