import React from "react";

const SectionCowork = props =>{
    return(
        <div className="container-fluid">
            <div className="row justify-content-between">
            <div className="col-md-5 d-lg-none ">
                     <img alt=" " className="background-cowork-mobile" src="./img/Coworking.png"/>
                </div>
                <div className="col-md-5 pt-lg-5 ml-lg-5 pl-lg-5 mt-lg-5">
                <div className=" title-color"><p class="h5">Crea y gestiona tu comunidad</p></div>
                
                    <p className="subtitle-three pt-lg-3 pb-lg-2"> Todo las herramientas que necesitas en un solo lugar  </p>
                 
                   
                        <p>
                        La comunicación dentro de un cowork necesita las herramientas correctas para
                         conocer a sus usuarios, nuestra plataforma te permite crear y gestionar la comunidad de 
                         tu Cowork Space sin olvidarte de lo que esta sucediendo en la operación de tu espacio.  </p>  
                         <p>
                         Lo mas
                          valioso de un espacio de trabajo colaborativo es la comunidad que se genera, detrás de cada
                           coworker existe un grupo de personas con necesidades en común, hemos desarrollado un canal 
                           de comunicación que te permite conocer a los miembros de tu coworking y todos los de la ciudad. 
                          </p>    
                          <p className="pt-lg-4 pb-lg-4">
                          Solicita tu prueba gratis y empieza a comunicarte mas fácil y mejor !</p>                    
                          <a rel="noopener noreferrer" target="_blank" href="https://meetwork.cl/login"><button type="button" className="btn btn-download shadow   bg-white">Solicitar prueba gratis</button></a>
                                                                                                                     
                </div>
                <div className="col-md-5 ">
                     <img alt=" " className="background-cowork" src="./img/Coworking.png"/>
                </div>
                
            </div>
           
        </div>
    );
}
export default SectionCowork;