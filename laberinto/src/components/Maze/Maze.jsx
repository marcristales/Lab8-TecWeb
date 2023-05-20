import React, { useState, useEffect } from 'react'
import styles from './Maze.module.css'
import Floor from '../Floor/Floor'
import Wall from '../Wall/Wall'
import Player from '../Player/Player'
import Modal from '../Modal/Modal'
import Form from '../Form/Form'

const Maze = () => {
  const [mazeData, setMazeData] = useState([])
  const [playerDirection, setPlayerDirection] = useState('down')
  const [showModal, setShowModal] = useState(true)
  const [configValues, setConfigValues] = useState({
    mazeSize: { ancho: '5', largo: '5' },
    theme: 'kitchen',
    skin: 'mouse',
    timer: 60
  })
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fetchMaze = async () => {
    const response = await fetch(
      `https://maze.uvgenios.online/?type=json&w=${configValues.mazeSize.ancho}&h=${configValues.mazeSize.largo}`
    )
    const data = await response.json()
    setMazeData(data)
  }

  const movePlayer = (dx, dy) => {
    setMazeData((oldMaze) => {
      const newMaze = oldMaze.map((row) => [...row])

      let [x, y] = [null, null]

      for (let i = 0; i < oldMaze.length; i++) {
        const index = oldMaze[i].indexOf('p')
        if (index !== -1) {
          x = index
          y = i
          break
        }
      }

      const newX = x + dx
      const newY = y + dy

      if (newMaze[newY] && newMaze[newY][newX] === ' ') {
        newMaze[y][x] = ' '
        newMaze[newY][newX] = 'p'
      } else if (newMaze[newY] && newMaze[newY][newX] === 'g') {
        newMaze[y][x] = ' '
        newMaze[newY][newX] = 'p'
        alert('Ganaste!')
      }

      return newMaze
    })
  }

  const handleFormSubmit = (formValues) => {
    const { mazeWidth, mazeHeight, theme, skin, timer } = formValues;
    setConfigValues({
      mazeSize: { ancho: mazeWidth, largo: mazeHeight },
      theme,
      skin,
      timer
    });
    setShowModal(false);
  };

  useEffect(() => {
    fetchMaze();
  }, [configValues.mazeSize.ancho, configValues.mazeSize.largo]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        movePlayer(0, -1)
        setPlayerDirection('up')
      } else if (event.key === 'ArrowDown') {
        movePlayer(0, 1)
        setPlayerDirection('down')
      } else if (event.key === 'ArrowLeft') {
        movePlayer(-1, 0)
        setPlayerDirection('left')
      } else if (event.key === 'ArrowRight') {
        movePlayer(1, 0)
        setPlayerDirection('right')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.maze}>
        {showModal && !formSubmitted && (
          <div className={styles.modal}>
            <Modal>
              <Form onSubmit={handleFormSubmit} />
            </Modal>
          </div>
        )}
        {mazeData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, cellIndex) => {
              if (cell === '+' || cell === '-' || cell === '|') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`}>
                    <Wall type={configValues.theme} />
                  </div>
                )
              } else if (cell === 'p') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`} className={styles.cell}>
                    <div className={styles.player}><Player skin="mouse" direction={playerDirection} /></div>
                    <div className={styles.floor}><Floor type={configValues.theme} /></div>
                  </div>
                )
              } else if (cell === ' ') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`} className={styles.cell}>
                    <Floor type={configValues.theme} />
                  </div>
                )
              } else if (cell === 'g') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`} className={styles.cell}>
                    <Floor type="goal" />
                  </div>
                )
              } else {
                return null
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )

}

export default Maze
