import React from 'react';

const Navbar = props =>{

    return(
      
   
      <nav className="navbar fixed-top navbar-expand-lg navbar-light space-nav background-nav ">
          <div className="container">
          <a className="navbar-brand" target="_blank" href=" # ">
        <img className="imglogo" alt="icon" src="./img/logo1.png"/> 
        </a>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span >
          <i className="fa fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav margin-l">
          <li className="nav-item  space-li">
                <a className="nav-link nav-hover " href="#hero">Home</a>
            </li>
            <li className="nav-item  space-li"> 
                <a  className="nav-link nav-hover" href="#hotdesk">Hotdesk Free</a>
            </li>
            <li className="nav-item  space-li">
                <a rel="noopener noreferrer" target="_blank" className="nav-link nav-hover" href="https://meetwork.space/">Crea tu comunidad</a> 
            </li>
            <li className="nav-item  space-li">
                <a className="nav-link nav-hover" href="#comuniti ">Eres un coworking</a>
            </li>
            <li className="nav-item  space-li">
                <a className="nav-link nav-hover " href="#Startups">¿Ayudas a emprendedores?</a>
            </li>
            
          </ul>
        </div>
          </div>
      </nav>
        
     

   
    );

}

export default Navbar;