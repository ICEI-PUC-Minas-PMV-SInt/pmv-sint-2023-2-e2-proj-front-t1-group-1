import styled from "styled-components";

export const Title = styled.h1`
  margin-top: ${(props) => props.marginTop || "1.5rem"};
  font-weight: 700;
  padding-bottom: 1rem;
  color: #8c8c8c;

  @media (min-width: 576px) {
    margin-top: ${(props) => props.marginTop || "1.5rem"};
  }
`;
