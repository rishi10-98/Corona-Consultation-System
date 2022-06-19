import React from 'react'
import Footer from './Footer/Footer';
import './Home/HomeCss.css';
import Navbar from './Navbar';
function Home() {
    return (
        <div>
          <Navbar></Navbar>
        <div className="container mt-3">
          <div class="image-home-banner"  style={{width: '100%'}} >
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h1 class="display-9"> QUESTIONS ABOUT COVID-19?</h1>                  
                  <p class="lead">Consult online with our doctors for free!</p>
                  <h4 class="display-8">Stay at Home & Save Lives</h4>
                </div>
              </div>
            </div> 
          </div>        
         </div>
           <div class="container">
             <div className="content">
               <h2>FREE LIVE CHAT WITH HEALTHCARE PROFESSIONALS</h2>
               <p>Do you have any questions about coronavirus or COVID-19? Consult online with our doctors now from anywhere. We provide you a seamless and hassle-free online doctor chat experience from the comfort of your home. Get qualified medical advice now.</p>
             </div>
            </div>
            <Footer></Footer>
      </div>
    )
}

export default Home