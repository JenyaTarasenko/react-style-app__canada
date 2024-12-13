
import ButtonOrange from '../ ButtonOrange/ButtonOrange';
import './style.css';





function HomeTopBar () {
    return(

        <section className="home">
            <div className="home-image">
                <div className="home-conteiner">
                    <div className="home-items">
                        <p>Upgrade your basement</p>
                    </div>
                    <div className="home-description">
                        <h1>Basement renovations</h1>
                    </div>
                    <div className="home-text">
                        <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h2>
                    </div>
                    <div className="home-button">
                        <button className="home-btn">SHOWROOM</button>
                    </div>
                </div>
            </div>

            <div className="home-mobile">
                <div className="home-conteiner-mobile">
                    
                    <div className="home-items">
                        <p>Upgrade your basement</p>
                    </div>
                    <div className="home-description">
                        <h1>Basement renovations</h1>
                    </div>
                    <div className="home-text">
                        <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h2>
                    </div>

                    <ButtonOrange />

                </div>   

            </div>
        
        </section>


    );
}

export default HomeTopBar;