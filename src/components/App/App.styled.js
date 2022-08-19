import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }
`;
