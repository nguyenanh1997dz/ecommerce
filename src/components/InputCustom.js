import React from "react";

const InputCustom = (props) => {
    const {name,type,placeholder,classname} = props;
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`form-control ${classname ? classname : ""}` }
      />
    </div>
  );
};

export default InputCustom;
