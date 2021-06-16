
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Header = ({stateHome})=> {
    // states 
    const [homeExists, setHomeExists] = useState(false);

    useEffect(()=> {
        const homeActive = state => {
            setHomeExists(state)
        }
        homeActive(stateHome)
    }, [stateHome]);

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="navbar-brand px-md-5" href="/">Navbar</a>
                    </li>
                    <li className="nav-item">
                        {
                            homeExists &&  <Link to='/home' className="nav-link active">Home</Link>
                        }
                    </li>
                </ul>  
                <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to= '/login' className="nav-link px-md-3">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className="nav-link px-md-5" href="/">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;