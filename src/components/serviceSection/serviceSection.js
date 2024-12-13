import './style.css';
import servise from '../../FRONT/image/service-logo.png';
import ButtonOrange from '../ ButtonOrange/ButtonOrange';



function ServiceSection () {

    return(

        <section className="service">
            <div className="service-image">

                
                <div className="text-service__block">
                    <div className="text-block">
                        <h4>Our Services</h4>
                    </div>
                    <div className="text-block_item">
                        <p>areas what we service</p>
                    </div>
                </div>
                {/* <!--  текст блочный --> */}

                <div className="service-conteiner_card">


                    {/* <!--  card --> */}
                    <div className="service-card">
                        <div className="service-card_items">
                            <p>Heading</p>
                            <img src={servise} alt="service-logo"/>
                        </div>
                        <div className="service-card_description">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>

                        </div>

                    </div>
                    
                    {/* <!--  card --> */}


                    {/* <!--  card --> */}
                    <div className="service-card" style={{backgroundColor:'#E77B2D'}}>
                        <div className="service-card_items">
                            <p>Heading</p>
                            <img src={servise} alt="service-logo"/>
                        </div>
                        <div className="service-card_description">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>

                        </div>

                    </div>
                    {/* <!--  card --> */}


                    {/* <!--  card --> */}
                    <div className="service-card">
                        <div className="service-card_items">
                            <p>Heading</p>
                            <img src={servise} alt="service-logo"/>
                        </div>
                        <div className="service-card_description">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>

                        </div>
                    </div>
                    {/* <!--  card --> */}


                </div>

                <ButtonOrange
                    text="Read masseg" 
                    textClassName="service-btn"  
                />

            </div>
        </section>

    );
}

export default ServiceSection;