import React from "react";

const SectionCowork = props =>{
    return(
        <div className="container-fluid">
            <div className="row justify-content-between">
            <div className="col-md-5 d-lg-none ">
                     <img alt="meetwork" className="background-cowork-mobile" src="./img/Coworking.jpg"/>
                </div>
                <div className="col-md-5 pt-lg-5 ml-lg-5 pl-lg-5 mt-lg-5">
               <div className="container">
                    <div className="row padding-cowork">
                <div className="col-md-12 title-color">
                
                <p className="h5 title-color">Crea y gestiona tu comunidad</p>
                </div>
            
                <h3 className="subtitle-three pt-lg-3 pb-lg-2"> Todo las herramientas que necesitas en un solo lugar  </h3>
             
               
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
                      Solicita tu prueba gratis y empieza a comunicarte mas fácil y mejor!</p>                    
                      <a rel="noopener noreferrer" target="_blank" href="http://meetwork.app/descargar"><button type="button" className="btn btn-download shadow bg-white">Solicitar prueba gratis</button></a>
                                                                                                                 
            </div> 
                   </div>   
                </div>
                <div className="col-md-6">
                     <img alt="woworking meetwork" className="background-cowork" src="./img/Coworking.jpg"/>
                </div>
                
            </div>
           
        </div>
    );
}
export default SectionCowork;