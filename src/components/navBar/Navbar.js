// import '../../FRONT/CSS/style.css';
import './style.css';
import facebook from '../../FRONT/image/icon-facebook.png';
import logo from '../../FRONT/image/canada-logo.png';

function Navbar () {
    return (
        <header className="top-head">
          <div className="conteiner-top-head">
              <div className="top-header_items">
                <img src={facebook} alt="logo"/>
                <img src={facebook} alt="logo"/>
                <img src={facebook} alt="logo"/>
              </div>
              <div className="top-header_logo">
                 <img src={logo} alt="logo"/>
              </div>
              <div className="top-header_telephone">
                  <img src={facebook} alt="logo"/>
                  <a href="tel:+ 097 911 32 26"  className="telephone-header">+097 911 32 26</a>
              </div>
          </div>
        </header>
        
    );
}

export default Navbar;