import styled from "styled-components";

export const TitleCustom = styled.h1`
  ${({ marginTop, sizeFont, weightFont }) => `
    margin-top: ${marginTop || "1.5rem"};
    font-size: ${sizeFont || "2.5rem"};
    font-weight: ${weightFont || "700"};
  `}
  padding-bottom: 1rem;
  color: #343434;

  @media (min-width: 576px) {
    ${({ marginTop }) => `margin-top: ${marginTop || "1.5rem"};`}
  }
`;
