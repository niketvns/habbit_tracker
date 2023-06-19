import React, {createContext, useContext, useState} from "react";
import {allHabits} from '../db/habits.js'
import {v4 as uuid} from "uuid";

const habitContext = createContext()

const HabitProvider = ({children}) => {
    const [habits, setHabits] = useState(allHabits);


    console.log(habits)
    const addHabit = (habit) => {
        setHabits(prevState => [{id: uuid(), ...habit}, ...prevState])
    }

    const archiveHabit = (id) => {
        setHabits(prevState => prevState.map(habit => habit.id === id ? {...habit, category: 'archieved'} : habit ))
    }

    const trashHabit = (id) => {
        setHabits(prevState => prevState.map(habit => habit.id === id ? {...habit, category: 'trash'} : habit ))
    }

    const removeHabit = (id) => {
        setHabits(prevState => prevState.filter(habit => habit.id !== id))
    }

    return(
        <habitContext.Provider value={{habits, setHabits, addHabit, archiveHabit, trashHabit, removeHabit}}>
            {children}
        </habitContext.Provider>
    )
}

const useGlobalHabits = () => useContext(habitContext)

export {HabitProvider, useGlobalHabits}