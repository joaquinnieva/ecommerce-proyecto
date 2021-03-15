import React from 'react';
import "../components/styles/Inicioo.css"
import AdSlider1 from './AdSlider1';
import AdSlider2 from './AdSlider2';
import AdSlider3 from './AdSlider3';
import DataAd1 from './DataAd1';
import DataAd2 from './DataAd2';
import DataAd3 from './DataAd3';


function Inicio () {
    return(
        <div className="cont-inicio">
                        <div className="fix-inicio"></div>


            <div className="ad-seccion1">
                <AdSlider1 slides={DataAd1} autoplay />
            </div>
            <div className="ad-seccion2">
                <AdSlider2 slides={DataAd2} />
            </div>
            <div className="ad-seccion3">
                <AdSlider3 slides={DataAd3} />
            </div>
        </div>
    )
}

export default Inicio;