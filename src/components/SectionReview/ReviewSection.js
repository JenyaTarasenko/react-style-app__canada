import './style.css';
import reviews from '../../FRONT/image/reviews-1.png';


function ReviewSection () {

    return(

        <section class="reviews">
        {/* <!--  текст блочный --> */}
            <div class="text-service__block-reviews">
            <div class="text-block_item-reviews">
                <p>Customer Reviews</p>
            </div>
            </div>
       {/* <!--  текст блочный --> */}

        <div class="reviews-conteiner">

            {/* <!--  card --> */}
            <div class="reviews-card">
               <div class="reviews-img">
                   <img src={reviews} alt=""/>
               </div>
               <div class="reviews-description">
                   <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</h6>
               </div>
            </div>
           {/* <!--  card --> */}


           {/* <!--  line-modile --> */}
           <div class="custom-line"></div>
           {/* <!--  line-modile --> */}
          

            {/* <!--  card --> */}
            <div class="reviews-card">
               <div class="reviews-img">
                <img src={reviews} alt=""/>
               </div>
               <div class="reviews-description">
                   <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</h6>
               </div>
           </div>
           {/* <!--  card --> */}

           {/* <!--  line-modile --> */}
           <div class="custom-line"></div>
           {/* <!--  line-modile --> */}

            {/* <!--  card --> */}
            <div class="reviews-card">
               <div class="reviews-img">
                <img src={reviews} alt=""/>
               </div>
               <div class="reviews-description">
                   <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium своєї компанії в інтернеті.</h6>
               </div>
            </div>
           {/* <!--  card --> */}

        </div>
        </section>

    );
}

export default ReviewSection;