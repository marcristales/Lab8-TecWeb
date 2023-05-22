import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({ onClose, onSubmit }) => {
    const [formValues, setFormValues] = useState({
        mazeWidth: '5',
        mazeHeight: '5',
        theme: 'kitchen',
        skin: 'mouse',
        timer: '30',
        useTimer: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === 'checkbox' ? checked : value

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: newValue
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
            timer: '',
            useTimer: false
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
                    <div className={styles.pillsContainer}>
                        <label className={styles.pill}>
                            <input
                                type="radio"
                                name="theme"
                                value="kitchen"
                                checked={formValues.theme === 'kitchen'}
                                onChange={handleChange}
                            />
                            Cocina
                        </label>
                        <label className={styles.pill}>
                            <input
                                type="radio"
                                name="theme"
                                value="cave"
                                checked={formValues.theme === 'cave'}
                                onChange={handleChange}
                            />
                            Cueva
                        </label>
                        <label className={styles.pill}>
                            <input
                                type="radio"
                                name="theme"
                                value="castle"
                                checked={formValues.theme === 'castle'}
                                onChange={handleChange}
                            />
                            Castillo
                        </label>
                    </div>
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
                    <input className={styles.input} type="number" placeholder='30' name="timer" min="10" max="300" onChange={handleChange} />
                </div>
                <div className={styles.label}>
                    <span className={styles.labeltext}>Usar temporizador</span>
                    <input
                        type="checkbox"
                        name="useTimer"
                        checked={formValues.useTimer}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className={styles.button}>Jugar</button>
            </form>
        </div>

    )
}

export default Form