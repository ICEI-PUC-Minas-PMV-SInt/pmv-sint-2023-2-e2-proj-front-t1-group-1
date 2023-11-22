import React from "react";

const Form = ({ type, id, placeholder, information }) => (
  <div>
    <div className="form-floating input-float my-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
      <label className="label-float" htmlFor="inputCPF">
        {information}
      </label>
    </div>
  </div>
);

export default Form;
