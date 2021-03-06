import React from 'react';
        const SelectItems = props => {

        return(
                <div className="container text-center pad-btm">
    <div className="row ">
        <div className="col-md-12 pb-lg-5">
            <h2 className="font-title-section-two">Las herramientas que necesitas para <br/> desarrollar tu emprendimiento en un mismo lugar</h2>

        </div>

        <div className="col-md-12">
            <div className="row justify-content-center">
                <div class=" ground-float-two"></div> 
                <div className="col-md-3 card  round mr-lg-3 ml-lg-3 space-card ">

                    <div  className="row">

                        <div className="col-md-12">
                            <img className="img-selectoritems"  src="./img/item-one.jpg" alt="meetwork" />
                        </div>
                        <div className="col-md-12 mb-lg-3 pl-lg-5 pr-lg-5">

                            <p className="h5 mb-2 psectionitems ">Social Network</p>
                            <div className="subtitle-card"></div>
                        </div>
                        <div className="col-md-12 pl-lg-4 pr-lg-4">
                            <p className="text-margin">
                                En nuestra comunidad vas a encontrar emprendedores de diferentes países de Latinoamérica, interactúa con ellos y lleva tu networking al siguiente nivel.
                            </p>

                        </div>

                        <div className="col-md-6 offset-md-3 mt-lg-5">
                            <a className="a-color" href="#comuniti">Conocer más</a>
                        </div>


                    </div>

                </div>

                <div className="col-md-3 mr-lg-3 ml-lg-3 card round space-card">
                    <div  className="row">
                        <div className="col-md-12">
                            <img className="img-selectoritems"  href=" # " src="./img/item-three.jpg" alt="Lugares Meetwork" />
                        </div>
                        <div className="col-md-12 mb-lg-3 pl-lg-4 pr-lg-4">

                            <p className="h5 mb-2 psectionitems">Hotdesk Free</p>
                            <div className="subtitle-card"></div>
                        </div>
                        <div className="col-md-12 "> 
                            <p className="text-margin"> 
                                Siempre necesitamos esa opción de estar por un par de horas en un espacio distintito para aumentar romper la rutina y conocer lugares nuevos en la ciudad.
                            </p>

                        </div>
                        <div className="col-md-6 offset-md-3 mt-lg-5">
                            <a className="a-color" href="#hotdesk">Conocer más</a>
                        </div>

                    </div>
                </div>
                <div className="col-md-3 mr-lg-3 ml-lg-3 card round space-card">
                    <div  className="row">
                        <div className="col-md-12">
                            <img className="img-selectoritems"  href=" # " src="./img/item-two.jpg" alt="Herramientas Meetwork" />
                        </div>
                        <div className="col-md-12 mb-lg-3 pl-lg-5 pr-lg-5">

                            <p className="h5 mb-2 psectionitems">Eventos</p>
                            <div className="subtitle-card"></div>
                        </div>
                        <div className="col-md-12 pl-lg-4 pr-lg-4">
                            <p className="text-margin">
                               Los emprendedores se comunican y capacitan a través de eventos, de esta manera las comunidades se expanden al tiempo que el conocimiento, genera tus eventos en nuestros espacios.
                            </p>

                        </div>
                        <div className="col-md-6 offset-md-3 ">
                            <a className="a-color" href="https://meetwork.app/descargar">Conocer más</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
                );
                }

export default SelectItems;