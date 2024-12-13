
import Navbar from "../components/navBar/Navbar";
import FooterStyle from "../components/Footer/Footer";
import NavbarNavTop from "../components/NavbarNavTop/NavbarNavTop";
import LineNavbar from "../components/lineNavbar/LineNavbar";




function ServicesPage(){

    return(
        <div>
            <Navbar />
            <LineNavbar />
            <NavbarNavTop />
            
            <FooterStyle />
        </div>
    );
}

export default ServicesPage;