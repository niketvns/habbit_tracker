import {useState} from "react";
import {useGlobalHabits} from "../context/habbitContext.jsx";
import CreateHabitModel from "./CreateHabitModel.jsx";

const ShowHabitModel = ({habit, setShowHabit}) => {
    const [isEdit, setIsEdit] = useState(false)
    const {name, goal, start, timeOfDay, repeat} = habit;
    const {trashHabit, archiveHabit} = useGlobalHabits()


    return (
        <div className={'create-habit bg-black/40 fixed inset-0 text-white flex justify-center items-center'}>
            <div className="habit-card border-2 border-white/40 bg-primary p-2 rounded-lg w-full sm:w-[500px]">
                <h1 className={'text-xl py-2'}>Habit: {name}</h1>
                <p><span className={'font-bold text-lg'}>Goal:</span> {goal}</p>
                <p><span className={'font-bold text-lg'}>Started:</span> {start}</p>
                <p><span className={'font-bold text-lg'}>Time of Day:</span> {timeOfDay.toUpperCase()}</p>
                <p><span className={'font-bold text-lg'}>Repeat:</span> {repeat}</p>
                <div className="buttons p-4 pr-7 flex gap-4 justify-end items-center">
                    <button className={'bg-blue-300 p-2 px-3 cursor-pointer rounded-lg text-cyan-900'}
                            onClick={() => setShowHabit(false)}>Close
                    </button>
                    {
                        habit.category === 'home' &&
                        <>
                            <button className={'bg-blue-300 p-2 px-3 cursor-pointer rounded-lg text-cyan-900'} onClick={()=>setIsEdit(true)}>Edit
                            </button>
                            <button className={'bg-red-400 p-2 px-3 cursor-pointer rounded-lg text-cyan-900'}
                                    onClick={() => trashHabit(habit.id)}>Trash
                            </button>
                            <button className={'bg-yellow-500 p-2 px-3 cursor-pointer rounded-lg text-cyan-900'}
                                    onClick={() => archiveHabit(habit.id)}>Archieve
                            </button>
                        </>
                    }
                </div>
            </div>
            {
                isEdit &&
                <CreateHabitModel curHabit={habit} isEdit={isEdit} setCreateModel={setIsEdit}/>
            }
        </div>
    );
};

export default ShowHabitModel;