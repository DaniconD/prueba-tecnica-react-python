import styled from "styled-components";

export const Input = styled.input`
  display: inline-flex;
  align-items: center;
  align-self: flex-end;

  background-color: ${props => props.look === 'delete' ? '#ff4e45' 
                            :  props.look === 'show' ? '#2ba640'
                            :"#e69e32"};
  border: none;
  border-radius: 5px;
  color: #f7f7f7;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 8px;
  &:active {
    opacity: 0.5;
  }
`;