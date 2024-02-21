import { Link, useLocation } from 'react-router-dom'; 
import logo from '../../assets/logo.png';
import navbar_icon from '../../assets/nav-bar-icon.png';

import './header-footer.css';

function Header() {
    const location = useLocation()

    return (
        <header>
            <div className='header-inicial'>
                <Link to="/"><figure><img src={logo} alt="" /></figure></Link>
                <ul>
                    <li ><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li ><Link to="/quemsomos" className={location.pathname === '/quemsomos' ? 'active' : ''}>Quem somos</Link></li>
                    <li ><Link to="/adote" className={location.pathname === '/adote' ? 'active' : ''}>Adote</Link></li>
                    <li ><Link to="/quemadotou" className={location.pathname === '/quemadotou' ? 'active' : ''}>Quem adotou</Link></li>
                </ul>
            </div>
            
            <div id="header-responsivo">
                <nav className="navbar">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><img src={logo} id="logo-responsiva"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <img src={navbar_icon}/>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <Link to="/" className="navbar-brand"><img src={logo} id="logo-responsiva"/></Link>              
                                <button type="button" className="btn-close" data-bs-dismiss="logo" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link to="/" className={location.pathname === '/' ? 'active-responsivo' : 'nav-link'} aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/quemsomos" className={location.pathname === '/quemsomos' ? 'active-responsivo' : 'nav-link'}>Quem somos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/adote" className={location.pathname === '/adote' ? 'active-responsivo' : 'nav-link'}>Adote</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/quemadotou" className={location.pathname === '/quemadotou' ? 'active-responsivo' : 'nav-link'}>Quem adotou</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
 
export default Header;