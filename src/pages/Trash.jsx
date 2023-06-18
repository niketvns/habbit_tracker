import {useGlobalHabits} from "../context/habbitContext.jsx";
import HabitCard from "../components/HabitCard.jsx";

const Trash = () => {
    const {habits} = useGlobalHabits()

    const trashHabits = habits.filter(habit => habit.category === 'trash')

    return (
        <div className={'archieved flex justify-center flex-wrap gap-2 py-8 px-2 text-white'}>
            {
                trashHabits.length ?
                    trashHabits.map(habit => (
                        <HabitCard key={habit.id} habit={habit}/>
                    )) :
                    <p className={'text-white/50 text-3xl italic'}>Nothing in the Trash</p>
            }
        </div>
    );
};

export default Trash;