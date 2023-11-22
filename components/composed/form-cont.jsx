import React from "react";

const FormCont = ({ type, information }) => (
  <div className="form-floating input-float my-1">
    <input type={type} className="form-control" />

    <label className="label-float">{information}</label>
  </div>
);

export default FormCont;
