import React, { useState, useEffect } from 'react'
import styles from './Maze.module.css'
import Floor from '../Floor/Floor'
import Wall from '../Wall/Wall'
import Player from '../Player/Player'

const Maze = () => {
  const [mazeData, setMazeData] = useState([])


  const fetchMaze = async () => {
    const response = await fetch(
      `https://maze.uvgenios.online/?type=json&w=5&h=5`
    )
    const data = await response.json()
    setMazeData(data)
  }

  useEffect(() => {
    fetchMaze()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.maze}>
        {mazeData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, cellIndex) => {
              if (cell === '+' || cell === '-' || cell === '|') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`}>
                    <Wall type="kitchen" />
                  </div>
                )
              } else if (cell === 'p') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`}>
                  <Floor type="kitchen" />
                  </div>
                )
              } else if (cell === ' ') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`}>
                    <Floor type="kitchen" />
                  </div>
                )
              } else if (cell === 'g') {
                return (
                  <div key={`${rowIndex}-${cellIndex}`}>
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
  // return (
  //   <div className={styles.Maze}>
  //     {mazeData.map((row, i) => {
  //       return (
  //         <div key={i} className={styles.Maze__row}>
  //           {row.map((cell, j) => {
  //             if (cell === "+" || cell === "-" || cell === "|") {
  //               return (
  //                 <Wall
  //                   key={j}
  //                   type="kitchen"
  //                 />
  //               )
  //             } else if (cell === " ") {
  //               return (
  //                 <Floor
  //                   key={j}
  //                   type="kitchen"
  //                 />
  //               )
  //               // } else if (cell === "p") {
  //               //   return (
  //               //     <Character
  //               //       key={j}
  //               //       backgroundImage={prompt.character}
  //               //     />
  //               //   )
  //             } else if (cell === "g") {
  //               return <Floor key={j} type="kitchen" />
  //             } else {
  //               return null
  //             }
  //           })}
  //         </div>
  //       )
  //     })}

  //   </div>
  // )
}

export default Maze
