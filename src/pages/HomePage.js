import Navbar from "../components/navBar/Navbar";
import FooterStyle from "../components/Footer/Footer";
import NavbarNavTop from "../components/NavbarNavTop/NavbarNavTop";
import LineNavbar from "../components/lineNavbar/LineNavbar";
import HomeTopBar from "../components/homeTopBar/homeTopBar";
import HomeButtomBar from "../components/homeButtomBar/homeButtomBar";
import ServiceSection from "../components/serviceSection/serviceSection";
import ShowRoom from "../components/ShowRoom/ShowRoom";
import ReviewSection from "../components/SectionReview/ReviewSection";
import FormSection from "../components/FormSection/FormSection";





function HomePage(){

    return(

        <div>
            {/* навигация */}
            <Navbar />
            <LineNavbar />
            <NavbarNavTop />
            {/* навигация */}

            <HomeTopBar/>
            <HomeButtomBar />
            <ServiceSection />
            <ShowRoom />
            <ReviewSection />
            <FormSection />


            {/* футер */}
            <FooterStyle />
            {/* футер */}
            
        </div>
    );
}
export default HomePage;

