import './style.css'
import ShowroomImage from '../../FRONT/image/showroom-1.png';

import ShowroomImageTwo from '../../FRONT/image/showroom-3.png';
import ShowroomImageTree from '../../FRONT/image/showroom-4.png';


function ShowRoom () {

    return(


        <section className="showroom">
            <div className="showroom-conteiner">
            
                <div className="text-service__block">
                    <div className="text-block">
                        <h4>Showroom</h4>
                    </div>
                    <div className="text-block_item-showroom">
                        <p>areas what we serv</p>
                    </div>
                </div>
            

                <div className="showroom-conteiner_card">

                    <div className="showroom-card" style={{ backgroundImage: `url(${ShowroomImage})`}}>   
                        <div className="card-conteiner">
                            <div className="showroom-item">
                                <h5>Heading</h5>
                            </div>
                            <div className="showroom-description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>
                            </div>
                        </div>
                    </div>
                    
    

                    <div className="showroom-card" style={{ backgroundImage: `url(${ShowroomImageTwo})`}}>   
                        <div className="card-conteiner">
                            <div className="showroom-item">
                                <h5>Heading</h5>
                            </div>
                            <div className="showroom-description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>
                            </div>
                        </div>
                    </div>



                    <div className="showroom-card" style={{ backgroundImage: `url(${ShowroomImageTree })`}}>   
                        <div className="card-conteiner">
                            <div className="showroom-item">
                                <h5>Heading</h5>
                            </div>
                            <div className="showroom-description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="showroom-card" style={{ backgroundImage: `url(${ShowroomImageTree })`}}> 
                        <div className="card-conteiner">
                            <div className="showroom-item">
                                <h5>Heading</h5>
                            </div>
                            <div className="showroom-description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</p>
                            </div>
                        </div>
                    </div>
                

                </div>
            </div>
        </section>

     

    );
}


export default ShowRoom;