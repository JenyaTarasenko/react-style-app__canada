import './style.css';

import logo from '../../FRONT/image/canada-logo.png';
import { Link } from 'react-router-dom';


function NavbarNavTop () {

    return(

        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#282E33'}}>
            <div className="container">
            
            <a className="navbar-brand d-lg-none" href="#">
                <img 
                src={logo} 
                alt="logo" 
                style={{width: '150px', height:'100px'}}
                />
            </a>
        
          
            <button className="navbar-toggler"
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            />

            <span className="navbar-toggler-icon" style={{backgroundImage: "url('/FRONT/image/burger-menu.png')"}}></span>
            
        
           
            <div className="collapse navbar-collapse" 
            id="navbarNav">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="about/">About Us</a>
                </li>
                <li classN="nav-item">
                    <a className="nav-link" href="servis/">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Showroom</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cost</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>

    );


}

export default NavbarNavTop;