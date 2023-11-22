  import React from "react";
  import * as S from "./input.js";

  const Input = ({ type, name, placeholder, information }) => (
    <S.InputFloat >
      <div className="form-floating input-float  my-3">
        <input
        
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={placeholder}
        />
        <label className="label-float" htmlFor={name}>
          {information}
        </label>
      </div>
    </S.InputFloat>
  );

  export default Input;
