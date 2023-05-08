import { useState, useEffect } from 'react'

const useMazeData = () => {
    const [mazeData, setMazeData] = useState('')

    // useEffect(() => {
    //   fetch('https://maze.uvgenios.online/api/maze')
    //     .then((response) => response.text())
    //     .then((data) => {
    //       const mazeArray = data.split('\n').map((row) => row.split(''));
    //       setMazeData(mazeArray);
    //     })
    //     .catch((error) => console.log(error));
    // }, [])

    useEffect(() => {
        fetch('https://maze.uvgenios.online/api/maze')
            .then((response) => response.text())
            .then((data) => setMazeData(data.trim()))
            .catch((error) => console.log(error))
    }, [])

    return mazeData
}

export default useMazeData
