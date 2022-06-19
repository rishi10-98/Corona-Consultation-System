import React from "react"
import './Footer.css';

function Footer() {

  return (

    <footer class="footer">
      <div class="container">
        
        <div class="footer-top">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="footer-widget footer-about">
                  <div class="footer-about-content">
                    <p class="mt-5 text-justify">We are one of the India's Largest Digital Healthcare Platform, giving customers 24x7 access to high-quality healthcare. Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology. It has been the pioneer in bringing ground-breaking healthcare technologies to India.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">Quick Links</h2>
                  <ul>
                    <li><a href="#">Search Doctors</a></li>
                    <li><a href="#">Registration</a></li>
                    <li><a href="#">Book Appointment</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">Learn More</h2>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">Follow Us</h2>
                  <ul>
                    <li><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i><span>  Facebook</span> </a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-linkedin-in"></i><span>  Instagram</span> </a></li>
                    <li><a href="https://www.twitter.com"><i class="fab fa-twitter" aria-hidden="true"></i><span>  Twitter</span></a></li>
                    <li><a href="https://www.linkedin.com"><i class="fab fa-linkedin-in" aria-hidden="true"></i><span>  LinkedIn</span></a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container-fluid">
            <div class="copyright">
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <div class="copyright-text">
                    <p class="mb-0">© 2021 OCCS. All rights reserved. Designed & Developed by JEE Full Stack Batch 1 Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>



  );
}

export default Footer
