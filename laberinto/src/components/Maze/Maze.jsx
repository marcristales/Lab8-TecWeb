import React from 'react'
import styles from './Maze.module.css'
import useMazeData from '../../hooks/useMazeData'

const Maze = () => {
  const mazeData = useMazeData()

  return (
    <div className={styles.container}>
      <div className={styles.maze}>
        <pre>{mazeData}</pre>
      </div>
    </div>
  )
}

export default Maze
