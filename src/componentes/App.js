import React, { Component } from  'react';
import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionTree from './SectionTree';
import SectionFour from './sectionFour';
import SectionFive from './SectionFive'; 
//import SectionSeven from './SectionSeven'; 
import SectionEight from './SectionEight'; 
import SectionNine from './SectionNine';
import Footer from './SectionFooter';
import SelectItems from './SectionItems';
import SectionCreate from "./SectionCreate";
import SectionCowork from "./SectionCowork";
import Hero from "./Hero";

class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 padding-hero">
                <Header/>
              </div>
          <div className="col-md-12 background-secon-hero" id="hero">
            <Hero/>
          </div>
            <div className="col-md-12 pl-4 pr-sm-0" id="downdload"> 
                <SelectItems/>
              </div>
              <div className="col-md-12 section-create" id="create" > 
                <SectionCreate/>
              </div>
              <div className="col-md-12 section-two " id="hotdesk"> 
                <SectionOne/>
              </div>
              <div className="col-md-12 backgroundTwo" id="comuniti"> 
                <SectionTwo/>
              </div>
              <div className="col-md-12 section-cowork" id="Coworks" >  
                <SectionCowork/> 
              </div>
              <div className="col-md-12 background-section-four" id="restaurantes">  
                <SectionFour/>
              </div>
              <div className="col-md-12 background-sectionThree" id="Startups"> 
                <SectionTree/>
              </div>
              
              <div className="col-md-12 background-section-five" id="Itinerante">  
                <SectionFive/>
              </div>
           
              <div className="col-md-12 backgroundEight">  
               <SectionEight/>
              </div>
              <div className="col-md-12 sectionNinebackground">  
              <SectionNine/>
              
              </div>
              <div className=" col-md-12 fotter">
                  <Footer/>
              </div>
              
        </div>
          
      </div>
     
      
    );
  }
}

export default App;
