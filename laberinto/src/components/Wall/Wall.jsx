import React from 'react'
import styles from './Wall.module.css'
import PropTypes from 'prop-types'

const Wall = ({ type }) => {
  return (
    <div className={`${styles.wall} ${styles[`wall--${type}`]}`} />
  )
}


Wall.propTypes = {
  type: PropTypes.oneOf(['cave', 'kitchen', 'castle'])
}

export default Wall