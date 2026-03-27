import { NavLink, Outlet, Link } from 'react-router-dom';
import WebApp from './build/WebApp.jsx';
import MobileApp from './build/MobileApp.jsx'

function Build() {
    return (
        <div className='home-card'>
            <Link to="/build/web">Web</Link>
            <Link to="/build/mobile">Mobile</Link>
            <Outlet/>
        </div>
    );
}

export default Build;