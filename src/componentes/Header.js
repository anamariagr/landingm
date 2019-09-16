import React from 'react';



const Header = props =>{  

    return(
      
        <header>
           <div className="container">
            
            <div className="row pr-4 text-hero">
                  <div className="col-md-5">
                      <div className="row ">
                            <div className="col-md-12">
                            <p className="text-light letter-lato">¿ Cómo te comunicas con tu comunidad?</p>
                            </div>
                            <div className="col-md-12">
                                  <h3 className="text-light">
                                  Crea, conecta y potencia tu emprendimiento apoyad@ de nuestra comuidad
                                  </h3> 
                            </div>
                            <div className="col-md-12">
                                  <p className="text-light letter-lato">
                                  Transformamos la infraestructura disponible de las ciudades en espacios de
                                   trabajo colaborativo y las conectamos con comunidades de personas que buscan 
                                  un espacio con un poco de amor y wifi para desarrollar sus proyectos.
                                  </p>
                            </div>
                            <div className="col-md-9">
                                  <div className="row">
                                      <div className="col-6">
                                          <a  rel="noopener noreferrer" target="_blank" href="https://meetwork.cl/places"><button type="button" class="btn btn-outline-light btn-radius">Registrarme</button></a>
                                      </div>
                                      
                                  </div>
                            </div>
                            <div className="col-md-6">
                                  <div className="row ">
                                        <div className="col-md-3 col-2">
                                            <div className="circle">
                                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/meetwork.app/?hl=es-la">
                                            <i className="fa fa-instagram"></i>
                                            </a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-2">
                                        <div className="circle">
                                        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Meetworkapp/">
                                        <i class="fa fa-facebook-f"></i>
                                        </a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-2">
                                        <div className="circle">
                                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/meetwork-co/" > 
                                              <i className="fa fa-linkedin"></i>
                                            </a>
                                            </div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                  </div>
            </div>
           </div>
        </header>
          )

    }

    export default Header