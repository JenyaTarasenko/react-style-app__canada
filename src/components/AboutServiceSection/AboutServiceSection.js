import './style.css';
import serviceimage from'../../FRONT/image/service-image-one.png';

function AboutService(){

    return(
        <section className="service-block">
        <div className="service-block__conteiner">
           
            <div className="service-block_image">
                <img src={serviceimage} alt=""/>
            </div>
           


            
            <div className="service-block__conteiner-text">
                <div class="service-block-items">
                    <h1>basement renovations</h1>
                </div>
                <div className="service-block-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex perferendis nisi amet aut, odio vel, placeat at deleniti consequuntur veniam facere ab ipsam porro, explicabo quis saepe. Quae, alias?</p>
                </div>
                <div className="service-block-app">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex perferendis nisi amet aut, odio vel, placeat at deleniti consequuntur veniam facere ab ipsam porro, explicabo quis saepe. Quae, alias?</p>
                </div>

                <div className="service-block-text-decoration">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
         
        </div>
    </section>


    );
}

export default AboutService;

