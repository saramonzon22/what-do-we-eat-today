import { Link } from 'react-router-dom';

function Header(props) {
    return <header className='header'>
        <div className='logo'></div>
        <nav className='nav-header'><ul className='nav-bar'>
            <li ><Link to='/signin' className='projects'>Sign in</Link></li>
            <li ><Link to='/login' className='login'>Log in</Link></li>

        </ul></nav>
    </header>

}

export default Header;