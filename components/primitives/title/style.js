import styled from "styled-components";

export const Title = styled.h1`
  margin-top: ${(props) => props.marginTop || "1.5rem"};
  font-size: ${(props) => props.sizeFont || "2.5rem"};
  font-weight: 700;
  padding-bottom: 1rem;
  color: #343434;

  @media (min-width: 576px) {
    margin-top: ${(props) => props.marginTop || "1.5rem"};
  }
`;
