import './style.css';

function FormSection(){

    return(
        <section className="form">

            <div className="conteiner-form">

                <div className="form-row-right">
                    {/* <!--  текст на мобильн версии --> */}
                    <div className="text-form-top-mobile">
                        <h5>Get a <span style={{color:'#E77B2D'}}>FREE</span>Consultation</h5>
                    </div>
                    {/* <!--  текст на мобильн версии --> */}

                    <div className="form-row">
                        <input type="text" class="form-field" placeholder="Full Name"/>
                        <input type="text" class="form-field" placeholder="Phone number"/>
                    </div>
                    <div className="form-row">
                        <input type="text" class="form-field large-field" placeholder="Your Comment"/>
                    </div>
                </div>

                <div class="form-row-left">
                    
                    {/* <!--  текст на мобильн версии --> */}
                    <div className="text-service__block-mobile">
                        <div className="text-block_item-mobile">
                            <p>Leave your contact information<br/>& we'll call you back</p>
                        </div>
                    </div>
                    {/* <!--  текст на мобильн версии --> */}

                    <h5>Get a <span style={{color:'#E77B2D'}}>FREE</span><br/>Consultation</h5>
                    <button className="home-btn">send message</button>
                </div>


            </div>


    </section>


    );
}

export default FormSection;