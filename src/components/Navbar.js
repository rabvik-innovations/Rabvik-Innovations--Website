import '../css/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="container" id="header">

            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {/* Navbar */}
                        <img src="../images/Rabvik Innovations.png" id="logo" style={{height:"70px", width:"129px", marginTop:"6%", marginBottom:"2%"}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto nav-menu">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blogs</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/ourpartners">Partners</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    School Partnership Program
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/innovation-lab">Innovation Lab</Link></li>
                                    <li><Link className="dropdown-item" to="/tinker-times">Tinker Times</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/team">
                                    Team
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;