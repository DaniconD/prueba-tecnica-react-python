import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;

  background-color: ${props => props.look === 'delete' ? '#ff4e45' 
                            :  props.look === 'show' ? '#2ba640'
                            :"#e69e32"};
  border: none;
  border-radius: 5px;
  color: #f7f7f7;
  cursor: pointer;
  font-size: 18px;
  margin-left: 5px;
  padding: 5px;
  &:active {
    opacity: 0.5;
  }
`;