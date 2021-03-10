import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const brand = {
    //     color: 'red'
    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold brand-color"  to="/ExploreTeams"><span className='brand-color'>Explore</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/ExploreTeams">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">Players Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">NOtice</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search Team by name" aria-label="Search" />
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;