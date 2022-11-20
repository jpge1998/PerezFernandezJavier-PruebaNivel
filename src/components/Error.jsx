import React from "react";
import PropTypes from "prop-types";

//Componente para enseñar los errores

const Error = ({ message }) => {
  return <p className="error">{message}</p>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Error;
