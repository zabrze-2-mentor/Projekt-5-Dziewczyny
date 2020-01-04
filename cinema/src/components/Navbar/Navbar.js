import React from 'react';
import './Navbar.css';
import Banner from '../Banner/Banner'



const list = [
    { name: "filmy", path: "#films" },
    { name: "szukaj", path: "#search" },
    { name: "kontakt", path: "#contact" },
]

const Navbar = () => {

    const menu = list.map(item => (
        <li key={item.name} className="navbar-item px-3 px-lg-5">
            <a href={item.path} className="nav-link">{item.name}</a>
        </li>
    ))

    return (
        <div>
            <Banner />
            <nav className="navbar navbar-dark navbar-expand-sm nawigation sticky-top">
                <div className="container">
                    <button className="navbar-toggler order-first" data-toggle="collapse" data-target="#navbar-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbar-collapse" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {menu}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )

};

export default Navbar;