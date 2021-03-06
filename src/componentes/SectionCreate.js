import React from "react";

const SectionCreate = props =>{
    return(
           <div className="container">
                 <div className="row letter-color justify-content-between">
                
                <div className="col-md-5 pb-2 ">
                    
                <img alt="social network meetwork"className="img-section-create" src="./img/SocialNetwork.webp"/>   
             </div>
             
             <div className="col-md-5 pr-lg-5 pb-lg-2 mr-lg-5 mt-lg-5 pt-lg-5"> 
             <div className="row ">
                         <div className=" col text-right title-color">
                             <p className="title-color h5">Crea y gestiona tu comunidad</p>
                         </div>
                         <h3 className="subtitle-create text-right">Trae tus grupos de chats y comunicate mejor</h3>
                       <div className="col-md-12 pb-5 text-right">
                                            <p>
                                            Hemos creado una plataforma de comunicación para ti y tu emprendimiento, puedes compartir las actualizaciones tu proyectos y conocer a nuevas personas que tiene necesidades en común contigo, pertenecer y crear una red de contactos va a llevar tu emprendimiento al siguiente nivel
                                            </p>
                                        </div>
                                        <div className="col-md-12 text-right pb-4">
                                       <a rel="noopener noreferrer" target="_blank" href="http://meetwork.app/descargar"><button type="button" class="btn btn-download-mate shadow   bg-white ">Descarga nuestra app</button></a> 
                                        </div>
                                       
                                        <div className="col-md-12"> 
                                           <div className="row">
                                                <div className="col-md-5">
                                                       
                                                </div>
                                                <div className="col-md-7 p-2 mt-3 ">
                                            <div className="row">
                                                    <div className="col-lg-5 col pr-1">
                                                      <a rel="noopener noreferrer" target="_blank" href="https://apps.apple.com/ar/app/meetwork-app/id1462502158" ><img alt="descarga meetwork ios" className="btn-app" src="./img/Logo_appstore.png"/> </a>  
                                                   </div>  
                                                    <div className="col-lg-6 col pl-1 text-right"> 
                                                       <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=meetwork.app&hl=es"><img alt="descarga meetwork android"  className="btn-store"  src="./img/logo-android.png"/></a> 
                                                    </div>
                                            </div>
                                        </div> 
                                                
                                           </div>
                                      </div>
                                    
                </div>
                       
             </div>
             <div className="col-md-5 pb-2 ">
                    
                    <img alt="App meetwork" className="img-section-create-mobile d-lg-none" src="./img/SocialNetwork.jpg"/>   
                 </div>
             </div>
           </div>
    );
}

export default  SectionCreate;