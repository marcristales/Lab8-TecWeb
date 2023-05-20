import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({ onClose, onSubmit }) => {
    const [formValues, setFormValues] = useState({
        mazeWidth: '5',
        mazeHeight: '5',
        theme: 'kitchen',
        skin: 'mouse',
        timer: '30'
    })

    const handleChange = (e) => {
      setFormValues((prevValues) => ({
        ...prevValues,
        [e.target.name]: e.target.value
      }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit(formValues)
      onClose()
      setFormValues({
        mazeWidth: '',
        mazeHeight: '',
        theme: 'kitchen',
        skin: 'mouse',
        timer: ''
      })
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Ancho del Laberinto</span>
                    <input className={styles.input} type="number" placeholder='5' name="mazeWidth" min="4" max="100" onChange={handleChange} />
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Largo del Laberinto</span>
                    <input className={styles.input} type="number" placeholder='5' name="mazeHeight" min="4" max="100" onChange={handleChange} />
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Tema</span>
                    <select className={styles.select} name="theme" onChange={handleChange}>
                        <option value="kitchen">Cocina</option>
                        <option value="cave">Cueva</option>
                        <option value="castle">Castillo</option>
                    </select>
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Skin</span>
                    <select className={styles.select} name="skin" onChange={handleChange}>
                        <option value="mouse">Ratón</option>
                        <option value="astronaut">Astronauta</option>
                        <option value="knight">Caballero</option>
                    </select>
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Tiempo</span>
                    <input className={styles.input} type="number" placeholder='30' name="timer" min="30" max="120" onChange={handleChange} />
                </div>
                <button type="submit" className={styles.button}>Jugar</button>
            </form>
        </div>

    )
}

export default Form