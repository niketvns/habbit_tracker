import HabitCard from "../components/HabitCard.jsx";
import {useGlobalHabits} from "../context/habbitContext.jsx";
import CreateHabitModel from "../components/CreateHabitModel.jsx";
import {useState} from "react";

const Home = () => {
    const [isCreateModel, setCreateModel] = useState(false)
    const {habits} = useGlobalHabits()

    return (
        <div className={'home flex justify-center flex-wrap gap-2 py-8 px-2'}>
            <div className={'create-habit-card bg-secondary w-80 h-40 rounded-lg p-4 text-cyan-900 font-bold text-2xl cursor-pointer'} onClick={()=>setCreateModel(prevState => !prevState)}>
                Create New Habit
            </div>
            {
                habits.filter(habit => habit.category === 'home').map(habit => (
                    <HabitCard key={habit.id} habit={habit}/>
                ))
            }
            {
                isCreateModel &&
                <CreateHabitModel setCreateModel={setCreateModel}/>
            }
        </div>
    );
};

export default Home;