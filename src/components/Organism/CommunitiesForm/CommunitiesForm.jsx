import React from 'react'

import StaticImage from '../../../assets/doge.jpg'
import * as Styled from './CommunitiesForm.styled'

function CommunitiesForm({ community }) {
  return (
    <Styled.Container>
      <Styled.Form action="">
        <Styled.FieldsContainer>
          <Styled.LeftFields>
            <Styled.Field>
              <label>Name<span>*</span></label>
              <input type="text" name="" id="" value={community} onChange={(e) => e.target.value} required />
            </Styled.Field>
            <Styled.Field>
              <label>Category</label>
              <input type="text" name="" id="" />
            </Styled.Field>
            <Styled.Field>
              <label>Parent Community</label>
              <input type="text" name="" id="" />
            </Styled.Field>
          </Styled.LeftFields>
          <Styled.RightFields>
            <img src={StaticImage} alt="img" />
            <Styled.Button onClick={() => {}}>Select Image</Styled.Button>
          </Styled.RightFields>
        </Styled.FieldsContainer>
        <Styled.Field>
          <label>Short Description<span>*</span></label>
          <input type="text" name="" id="" required />
        </Styled.Field>
        <Styled.Field area >
          <label>Description</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </Styled.Field>
        <Styled.Submit type="submit" value="Submit" />
      </Styled.Form>
    </Styled.Container>
  )
}

export default CommunitiesForm