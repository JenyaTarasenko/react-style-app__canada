
import './style.css';
import facebook from '../../FRONT/image/icon-facebook.png';

function FooterStyle () {

    return(

        <footer className="footer">
            <div className="footer-conteiner">
                <div className="footer-image">
                    <div className="footer-description">
                        <div className="footer-logo"></div>
            
        
                        <div className="footer-tel">
                            <div className="footer-tel-column">
                                <a href="#"><img src={facebook} alt="logo"/></a>
                                <a href="tel:+ 097 911 32 26" class="telephone-footer">+097 911 32 26</a>
                            </div>
                            <div className="footer-tel-column">
                                <a href="#"><img src={facebook} alt="logo"/></a>
                                <a href="tel:+ 097 911 32 26" class="telephone-footer">+097 911 32 26</a>
                            </div>
                            
                        </div>
                        <div className="footer-text">
                            <p>Графік роботи:пн-пт с 9.00 до 19.00/ сб, нд - вихідний.</p>
                        </div>
                        <div className="footer-soc">
                            <a href="#"><img src={facebook} alt="logo"/></a>
                            <a href="#"><img src={facebook} alt="logo"/></a>
                            <a href="#"><img src={facebook} alt="logo"/></a>
        
                        </div>
        
                        <div className="footer-mars">
                        <a href=""><p>Web Studio “Mars” 2024</p></a>
                        </div>
        
                    </div>

                </div>
                
            </div>
        </footer>

    );
}

export default FooterStyle;