import React from 'react'
import { Slide } from 'react-slideshow-image'
import SlideCont from './SlideCont'
import Itemslider1 from './Itemslider1'
import ItemSlider2 from './ItemSlider2'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true, 
    arrows: false,
    


}

const Slideshow = () =>{
    return(
        <div className="containSilde background-item-nine">
                <Slide {...proprietes}>
                    <div className="each-slide">
                        <div>
                            <SlideCont/>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <Itemslider1/>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                        <ItemSlider2/>
                        </div>
                    </div>
                </Slide>
        </div>
    );
}

export default Slideshow;