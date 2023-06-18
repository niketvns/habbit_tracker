import HabitCard from "../components/HabitCard.jsx";
import {useGlobalHabits} from "../context/habbitContext.jsx";

const Archieve = () => {

    const {habits} = useGlobalHabits()

    const archievedHabits = habits.filter(habit => habit.category === 'archieved')

    return (
        <div className={'archieved flex justify-center flex-wrap gap-2 py-8 px-2 text-white'}>
            {
                archievedHabits.length ?
                archievedHabits.map(habit => (
                    <HabitCard key={habit.id} habit={habit}/>
                )) :
                    <p className={'text-white/50 text-3xl italic'}>Nothing in the Archieved</p>
            }
        </div>
    );
};

export default Archieve;