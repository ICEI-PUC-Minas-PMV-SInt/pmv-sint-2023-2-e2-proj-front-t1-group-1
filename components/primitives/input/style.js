import styled from "styled-components";

export const InputFloat = styled.div`
  .form-floating input.form-control:focus {
    border: #2ec0c2 solid 0.5px;
    box-shadow: none;
  }

  input.form-control:-webkit-autofill,
  input.form-control:-webkit-autofill:hover,
  input.form-control:-webkit-autofill:focus,
  input.form-control:-webkit-autofill:active {
    -webkit-box-shadow: none;
    transition: background-color 5000s ease-in-out 0s;
  }
  .form-floating input {
    padding: 2rem 0.75rem 0.75rem 0.75rem !important;
  }
  .label-float {
    color: #8c8c8c;
  }
`;
