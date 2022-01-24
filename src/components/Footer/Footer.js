import React from 'react';
import './Footer.scss'

const Footer = () => {
  return <footer class="footer d-flex flex-nowrap justify-content-between align-items-center py-3 my-4 border-top">
  <div class="col-md-3 d-flex align-items-center m-1 copy-right">
    <span class="">© <b>2017</b> SOHO internet + humana</span>
  </div>
  
  <ul class="nav col-md-3 d-flex justify-content-around  flex-row align-items-center m-1 contact-container">
    <li class="ms-3"><a class="text" href="#">Visitanos</a></li>
    <li class="ms-3"><a class="text" href="#">Escribenos</a></li>
    <li class="ms-3"><a class="text" href="#">Llamanos</a></li>
    
  </ul>
  

  <ul class="nav col-md-3 justify-content-around list-unstyled d-flex flex-row flex-nowrap m-2">
    <li class="ms-3"><a class="text" style={{color: '#3b0362', textDecoration: 'none'}} href="#">Facebook</a></li>
    <li class="ms-3"><a class="text" style={{color: '#0699c6', textDecoration: 'none'}}  href="#">Twitter</a></li>
    <li class="ms-3"><a class="text" style={{color: '#004cff', textDecoration: 'none'}}  href="#">Linkedin</a></li>
    <li class="ms-3"><a class="text" style={{color: '#e84747', textDecoration: 'none'}}   href="#">Youtube</a></li>
    
  </ul>
</footer>;
}

export default Footer;
