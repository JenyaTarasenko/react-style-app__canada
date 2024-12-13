
import ButtonOrange from '../ ButtonOrange/ButtonOrange';
import './style.css';





function HomeButtomBar () {
    return(

        <section className="urban">
            <div className="urban-image">
                <div className="urban-conteiner">
                    <div className="urban-title">
                        <h3>Urban Basement Solution</h3>
                    </div>
                    <div className="urban-description">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumdoloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                    </div>
                    {/* <div className="urban-button">
                        <button className="urban-btn">read</button>
                    </div> */}
                        <ButtonOrange
                         text="Read masseg" 
                         textClassName="urban-button"  
                        />
    
                </div>
            </div>
            <div className="urban-planshet">
                <div className="urban-conteiner-mobile">
                    <div className="urban-title">
                        <h3>Urban Basement Solution</h3>
                    </div>
                    <div className="urban-description">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumdoloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                    </div>
                    
                    <ButtonOrange />
                </div>
    
            </div>
        </section>
        
    );
} 

export default HomeButtomBar;