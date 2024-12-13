import Navbar from "../components/navBar/Navbar";
import FooterStyle from "../components/Footer/Footer";
import NavbarNavTop from "../components/NavbarNavTop/NavbarNavTop";
import LineNavbar from "../components/lineNavbar/LineNavbar";
import AboutFirstSection from "../components/AboutFirstSection/AboutFirst";
import TextSection from "../components/ textSection/textSection";
import AboutService from "../components/AboutServiceSection/AboutServiceSection";




function AboutPage(){

    return(

        <div>
           <Navbar />
            <LineNavbar />
            <NavbarNavTop />
            <AboutFirstSection />
            <TextSection />
            <AboutService />
            <FooterStyle />
        </div>
    );
}
export default AboutPage;

