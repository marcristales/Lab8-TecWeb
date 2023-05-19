import React from 'react'
import PropTypes from "prop-types";
import styles from "./Player.module.css";

const Player = ({ skin }) => {
    return <div className={`${styles.player} ${styles[`player--${skin}`]}`} />
}

Player.propTypes = {
    type: PropTypes.oneOf(['astronaut', 'mouse', 'kid'])
  }

export default Player