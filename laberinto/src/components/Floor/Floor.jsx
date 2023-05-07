import React from "react";
import PropTypes from "prop-types";
import styles from "./Floor.module.css";

export const Floor = ({ type }) => {

  return <div className={`${styles.floor} ${styles[`floor--${type}`]}`} />;

};

Floor.propTypes = {
  type: PropTypes.oneOf(["cave", "kitchen", "castle"])
};