import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={'navbar bg-secondary flex justify-around text-white py-3'}>
            <div className="left text-xl">Habit Tracker</div>
            <ul className="right flex gap-6 items-center">
                <NavLink to={'/'}><li className={'backdrop-sepia-0 bg-white/40 py-2 px-3 rounded-lg cursor-pointer'}>Home</li></NavLink>
                <NavLink to={'/archieve'}><li className={'backdrop-sepia-0 bg-white/40 py-2 px-3 rounded-lg cursor-pointer'}>Archieve</li></NavLink>
                <NavLink to={'/trash'}><li className={'backdrop-sepia-0 bg-white/40 py-2 px-3 rounded-lg cursor-pointer'}>Trash</li></NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;