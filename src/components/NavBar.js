import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='flex'>
            <NavLink to="/" className={({isActive}) => isActive ? 'navlink dark' : 'navlink'}>Home</NavLink>
            <NavLink to="/education" className={({isActive}) => isActive ? 'navlink dark' : 'navlink'}>Education</NavLink>
            <NavLink to="/transportation" className={({isActive}) => isActive ? 'navlink dark' : 'navlink'}>Transportation</NavLink>
            <NavLink to="/pricing" className={({isActive}) => isActive ? 'navlink dark' : 'navlink'}>Pricing</NavLink>
            <NavLink to="/donate" className={({isActive}) => isActive ? 'navlink dark' : 'navlink'}>Donate</NavLink>
        </nav>
    );
}
