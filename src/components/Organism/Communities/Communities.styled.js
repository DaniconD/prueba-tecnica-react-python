import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid #e9e9e9;
  border-radius: 15px;
  box-shadow: 1px 5px 10px #4b4b4b;
  height: 800px;
  margin: 20px 5%;
  padding-bottom: 40px;
  width: 30%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-height: 20%;
  padding: 10px 20px;
`;

export const ListCard = styled.ul`
  max-height: 80%;
  overflow-y: scroll;
`;

export const ListElement = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  border-top: 2px solid #e9e9e9;

  b {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;

  background-color: ${props => props.delete ? '#ff4e45' : props.show ? '#2ba640' : "#e69e32"};
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

