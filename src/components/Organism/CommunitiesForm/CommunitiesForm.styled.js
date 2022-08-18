import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid #e9e9e9;
  border-radius: 15px;
  box-shadow: 1px 5px 10px #4b4b4b;
  height: 90vh;
  margin: 20px 5%;
  padding-bottom: 40px;
  width: 50%;

  @media (max-width: 800px) {
    width: 80%;
    margin: 20px 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Field = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 20px 20px;
  width: calc(100% - 25px);

  @media (max-width: 600px) {
    flex-direction: column;
  }

  label {
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    min-width: 160px;
  }

  span {
    color: #ff4e45;
  }

  input[type='text'] {
    border: 2px solid #e9e9e9;
    font-size: 14px;
    padding: 5px;
    min-width: calc(100% - 210px);  
  }

  textarea {
    font-size: 14px;
  }
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LeftFields = styled.div`
  width: 70%;
`;

export const RightFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 30%;

  img {
    box-shadow: 1px 5px 10px #4b4b4b;
    height: auto;
    width: 80%;
  }
`;

export const Submit = styled.input`
  align-self: flex-end;

  background-color: #e69e32;
  border: none;
  border-radius: 5px;
  color: #f7f7f7;
  cursor: pointer;
  font-size: 14px;
  margin-right: 20px;
  padding: 6px;
  &:active {
    opacity: 0.5;
  }
`;

