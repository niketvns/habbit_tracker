import React, {createContext, useContext, useState} from "react";
import {allHabits} from '../db/habits.js'
import {v4 as uuid} from "uuid";

const habitContext = createContext()

const HabitProvider = ({children}) => {
    const [habits, setHabits] = useState(allHabits)

    console.log(habits)
    const addHabit = (habit) => {
        setHabits(prevState => [...prevState, {id: uuid(), ...habit}])
    }

    const archiveHabit = (id) => {
        setHabits(prevState => prevState.map(habit => habit.id === id ? {...habit, isArchived: true} : habit ))
    }

    const trashHabit = (id) => {
        setHabits(prevState => prevState.map(habit => habit.id === id ? {...habit, isInTrash: true} : habit ))
    }

    return(
        <habitContext.Provider value={{habits, setHabits, addHabit, archiveHabit, trashHabit}}>
            {children}
        </habitContext.Provider>
    )
}

const useGlobalHabits = () => useContext(habitContext)

export {HabitProvider, useGlobalHabits}