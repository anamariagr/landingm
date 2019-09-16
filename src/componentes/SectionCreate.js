import React from "react";

const SectionCreate = props =>{
    return(
           <div className="container">
                 <div className="row letter-color justify-content-between">
                
                <div className="col-md-5 pb-2 ">
                    
                <img alt=" "className="img-section-create" src="./img/SocialNetwork.png"/>   
             </div>
             <div className="col-md-5 pr-lg-5 pb-lg-2 mr-lg-5"> 
             <div className="row ">
                         <div className=" col text-right title-color">
                             <p className="h5">Crea y gestiona tu comunidad</p>
                         </div>
                         <p className="subtitle-create text-right">
                         Trae tus grupos de chats y comunicate mejor                       </p>
                       <div className="col-md-12 pb-5 text-right">
                                            <p>
                                            Hemos creado una plataforma de comunicación para ti y tu emprendimiento, puedes compartir las actualizaciones tu proyectos y conocer a nuevas personas que tiene necesidades en común contigo, pertenecer y crear una red de contactos va a llevar tu emprendimiento al siguiente nivel                                            </p>
                                        </div>
                                        <div className="col-md-12 text-right pb-4">
                                       <a rel="noopener noreferrer" target="_blank" href="http://meetwork.app/descargar"><button type="button" class="btn btn-download shadow   bg-white ">Descarga nuestra app</button></a> 
                                        </div>
                                       
                                        <div className="col-md-12">
                                           <div className="row">
                                                <div className="col-md-4">
                                                       
                                                </div>
                                                <div className="col-md-6 p-3 mt-3 ">
                                            <div className="row justify-content-between">
                                                    <div className="col-lg-5 col pr-1">
                                                      <a rel="noopener noreferrer" target="_blank" href="https://apps.apple.com/ar/app/meetwork-app/id1462502158" ><img alt="icon-1" className="btn-app" src="./img/Logo_appstore.png"/> </a>  
                                                   </div>  
                                                    <div className="col-lg-5 col pl-1 text-right"> 
                                                       <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=meetwork.app&hl=es"><img alt="logo-3"  className="btn-store"  src="./img/logo-android.png"/></a> 
                                                    </div>
                                            </div>
                                        </div> 
                                                
                                           </div>
                                      </div>
                                    
                </div>
                       
             </div>
             <div className="col-md-5 pb-2 ">
                    
                    <img alt=" " className="img-section-create-mobile d-lg-none" src="./img/SocialNetwork.png"/>   
                 </div>
             </div>
           </div>
    );
}

export default  SectionCreate;