
import substrate from "../../FRONT/image/substrate.png";
import './style.css';

function NewBlock(){

    return(

        <>
            <section className="new-page">
                <div className="new-page-image"></div>
                <div className="substrate">
                    <div className="text-service__block">
                        <div className="text-block_item new-page-text">
                            <p>areas what we serv</p>
                        </div>

                    </div>
                    <div className="substrate-conteiner">

                    
                        <div className="substrate-conteiner-card">
                            <img src={ substrate} alt=""/>
                            <div className="substrate-conteiner-items">
                                <h4>Heading</h4>
                                <p>Sed ut perspiciatis unde omnis iste </p>

                            </div>

                        </div>
                        
                        <div className="substrate-conteiner-card">
                            <img src={ substrate} alt=""/>  
                            <div className="substrate-conteiner-items">
                                <h4>Heading</h4>
                                <p>Sed ut perspiciatis unde omnis iste </p>

                            </div>

                        </div>
                    

                    
                        <div className="substrate-conteiner-card">
                            <img src={ substrate} alt=""/>
                            <div class="substrate-conteiner-items">
                                <h4>Heading</h4>
                                <p>Sed ut perspiciatis unde omnis iste </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="substrate-mobile-section">
                <div className="substrate-mobile">
                    <div className="substrate-mobile-conteiner">
                        <div className="substrate-mobile-card">

                            <div className="substrate-mobile-item">
                                <h6>Heading</h6>
                                <img src={ substrate} alt=""/>
                            </div>

                            <div className="substrate-mobile-description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>
                            </div>
                            <div className="substrate-mobile-line"></div>
                            
                        </div>

                        <div className="substrate-mobile-card">

                            <div className="substrate-mobile-item">
                                <h6>Heading</h6>
                                <img src={ substrate} alt=""/>
                            </div>

                            <div className="substrate-mobile-description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>
                            </div>
                            <div className="substrate-mobile-line"></div>
                            
                        </div>

                        <div className="substrate-mobile-card">

                            <div className="substrate-mobile-item">
                                <h6>Heading</h6>
                                <img src={ substrate} alt=""/>
                            </div>

                            <div className="substrate-mobile-description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>
                            </div>
                            <div className="substrate-mobile-line"></div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
      


    );
}

export default NewBlock;