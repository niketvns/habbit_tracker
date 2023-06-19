import {useState} from "react";
import ShowHabitModel from "./ShowHabitModel.jsx";

const HabitCard = ({habit}) => {
    const [isShowHabit, setShowHabit] = useState(false)

    return (
        <>
            <div className={'habit-card w-80 h-40 rounded-lg p-4 text-cyan-900 font-bold cursor-pointer'} onClick={()=>setShowHabit(true)}>
                <h1 className={'text-2xl'}>{habit.name}</h1>
                <p>Started: {habit.start}</p>
            </div>

            {
                isShowHabit &&
                <ShowHabitModel habit={habit} setShowHabit={setShowHabit}/>
            }
        </>
);
};

export default HabitCard;