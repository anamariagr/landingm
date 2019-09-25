import React from 'react';

const Navbar = props =>{

    return(
      
    <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light space-nav">
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
          <li className="nav-item  space-li active">
            
                <a rel="noopener noreferrer" target="_blank" className="nav-link nav-hover"  href="https://meetwork.co/login">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item  space-li"> 
                <a target="_blank" class="nav-link nav-hover" href="#downdload ">Hotdesk Free</a>
            </li>
            <li className="nav-item  space-li">
                <a rel="noopener noreferrer" target="_blank" className="nav-link nav-hover" href="https://meetwork.space/">Crea tu comunidad</a> 
            </li>
            <li className="nav-item  space-li">
                <a   target="_blank" className="nav-link nav-hover" href="#comuniti ">Eres un coworking</a>
            </li>
            <li className="nav-item  space-li">
                <a target="_blank" className="nav-link nav-hover " href="#prices">¿Ayudas a emprendedores?</a>
            </li>
            
          </ul>
        </div>
      </nav>

    </div>
    );

}

export default Navbar;