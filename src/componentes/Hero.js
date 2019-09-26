import React from 'react';


const Hero = props =>{
    return(
       <div className="background-hero">
             <div className="container">
                 <div className="row pr-4 text-hero">
                  <div className="col-md-5">
                      <div className="row ">
                            <div className="col-md-12">
                            <p className=" font-title-up">¿ Como te comunicas con tu comunidad?</p>
                            </div>
                            <div className="col-md-12">
                                  <h3 className="text-light">
                                  Construye , crece y escala la comunidad de tu Startup
                                  </h3> 
                            </div>
                            <div className="col-md-12">
                                  <p className="text-light letter-lato">
                                  Transformamos la infraestructura disponible de las ciudades en espacios de trabajo colaborativo y las conectamos con comunidades de personas que buscan un espacio con un poco de amor y wifi para desarrollar sus proyectos.
                                  </p>
                            </div>
                            <div className="col-md-9">
                                  <div className="row">
                                      <div className="col-lg-6 col-sm-12">
                                          <a  rel="noopener noreferrer" target="_blank" href="http://meetwork.app/descargar"><button type="button" class="btn btn-outline-light btn-radius-register">Registrarme</button></a>
                                      </div>
                                      <div className="col-lg-6 col-sm-12">
                                          <a  rel="noopener noreferrer" target="_blank" href="http://meetwork.app/descargar"><button type="button" class="btn btn-outline-light btn-radius">Conocer más</button></a>
                                      </div>
                                  </div>
                            </div>
                            <div className="col-md-6 margin-logo-red">
                                  <div className="row">
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
       </div>

    )

}
export default Hero
