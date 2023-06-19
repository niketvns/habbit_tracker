import {useEffect, useState} from "react";
import {useGlobalHabits} from "../context/habbitContext.jsx";

const CreateHabitModel = ({curHabit, setCreateModel, isEdit}) => {
    const [habit, setHabit] = useState({
        thumbnail: "",
        name: "",
        start: "",
        repeat: "",
        category: "home",
        goal: "",
        timeOfDay: ""
    })

    useEffect(()=>{
        if(isEdit){
            setHabit(curHabit)
        }
    },[])

    const {addHabit, removeHabit} = useGlobalHabits()

    const handleDiscard = (e) => {
        e.preventDefault()
        setCreateModel(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isEdit){
            removeHabit(habit.id)
        }
        addHabit(habit);
        setCreateModel(false)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setHabit(prevState => ({...prevState, [name]: value}))
    }

    return (
        <div className={'create-habit bg-black/40 fixed inset-0 text-white flex justify-center items-center'}>
            <div className="create-habit-card border-2 border-white/40 bg-primary p-2 rounded-lg w-full sm:w-[500px]">
                <h1 className={'text-2xl py-2'}>New Habit</h1>
                <form onSubmit={handleSubmit} className={'flex flex-col gap-2 p-3'}>
                    <label htmlFor="name" className={'flex flex-col'}>
                        NAME*
                        <input onChange={handleChange} type="text" name={'name'} id={'name'} className={'rounded-lg p-2 text-cyan-900'} placeholder={'Running 3 KM'} required={true} value={habit.name}/>
                    </label>
                    <div className="repeat-goal flex gap-2">
                        <label htmlFor="repeat" className={'flex flex-col w-[50%]'}>
                            REPEAT
                            <select value={habit.repeat} required={true} onChange={handleChange} name="repeat" id="repeat" className={'rounded-lg p-2 text-cyan-900 w-full'}>
                                <option disabled selected>-- Choose an option --</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </label>
                        <label htmlFor="goal" className={'flex flex-col w-[50%]'}>
                            GOAL
                            <select value={habit.goal} required={true} onChange={handleChange} name="goal" id="goal" className={'rounded-lg p-2 text-cyan-900 w-full'}>
                                <option disabled selected>-- Choose an option --</option>
                                <option value="daily">1 Times Daily</option>
                                <option value="weekly">2 Times Daily</option>
                                <option value="weekly">1 Times Weekly</option>
                                <option value="monthly">1 Times Monthly</option>
                            </select>
                        </label>
                    </div>
                    <div className="repeat-goal flex gap-2">
                        <label htmlFor="timeOfDay" className={'flex flex-col w-[50%]'}>
                            TIME OF DAY
                            <select value={habit.timeOfDay} required={true} onChange={handleChange} name="timeOfDay" id="timeOfDay" className={'rounded-lg p-2 text-cyan-900 w-full'}>
                                <option disabled selected>-- Choose an option --</option>
                                <option value="daily">Morning</option>
                                <option value="weekly">Evening</option>
                                <option value="monthly">Any Time</option>
                            </select>
                        </label>
                        <label htmlFor="start" className={'flex flex-col w-[50%]'}>
                            START DATE
                            <input required={true} onChange={handleChange} type="date" name="start" id="start" className={'rounded-lg p-2 text-cyan-900 w-full'}/>
                        </label>
                    </div>
                    <div className="buttons p-4 pr-7 flex gap-4 justify-end items-center">
                        <button className={'bg-blue-300 p-2 px-3 cursor-pointer rounded-lg text-cyan-900'} onClick={handleDiscard}>Discard</button>
                        <button type={'submit'} className={'bg-blue-300 p-2 px-3 cursor-pointer rounded-lg text-cyan-900'}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateHabitModel;