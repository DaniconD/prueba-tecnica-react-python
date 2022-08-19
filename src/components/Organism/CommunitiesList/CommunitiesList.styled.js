import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid #e9e9e9;
  border-radius: 15px;
  box-shadow: 1px 5px 10px #4b4b4b;
  height: 90vh;
  margin: 20px 2%;
  padding-bottom: 40px;
  width: 36%;
  
  @media (max-width: 860px) {
    width: 80%;
    margin: 20px 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  max-height: 20%;
  padding: 10px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`
