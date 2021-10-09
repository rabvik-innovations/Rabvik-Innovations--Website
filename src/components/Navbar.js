import '../css/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="container">

            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        {/* Navbar */}
                        <img src="../images/logo.jpg" height="80px"
                            width="140px"
                            margin-top="20%" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/aboutus">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blog">Blogs</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Partners
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link class="dropdown-item" to="">Action</Link></li>
                                    <li><Link class="dropdown-item" to="">Action</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    School Partnership Program
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link class="dropdown-item" to="/innovation-lab">Innovation Lab</Link></li>
                                    <li><Link class="dropdown-item" to="">Periodical</Link></li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/team">
                                    Our Team
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;