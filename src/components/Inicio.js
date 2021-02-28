import React from 'react';
import "./styles/Inicio.css"
import { Slideshow, Slide, div } from './Slideshow'
import CardProducto from './CardProducto'
import Images from './Images';

function Inicio () {
    return(
        <div className="cont-inicio">
            <div className="fix-inicio"></div>
            <div className="add-section1">
                <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="8000">
                    <Slide>
                        <a href="#">
                            <img src={Images.Ad2} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.Ad1} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.Ad3} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.Ad4} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.Ad5} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.Ad6} alt=""/>
                        </a>
                    </Slide>
                </Slideshow>
            </div>
            <div className="add-section2">
            <Slideshow controles={true} autoplay={true} velocidad="4000" intervalo="10000">
				<Slide>
					<a href="#">
						<img src={Images.nvidia} alt=""/>
					</a>
					<div className="texto-ad" >
					¡Consíguelo ahora!
					</div>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.compragamer} alt=""/>
					</a>
					<div className="texto-ad" >
					¡Consíguelo ahora!
					</div>
				</Slide>
			</Slideshow>
            </div>
            <div className="add-section3">
            <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="10000" alturaSlide="200px">
                    <Slide width="20%">
                        <CardProducto imagen={Images.product1} />
                    </Slide>
                    <Slide width="20%">
                        <CardProducto imagen={Images.product2}/>
                    </Slide>
                    <Slide width="20%">
                        <CardProducto imagen={Images.product3}/>
                    </Slide>
                    <Slide width="20%">
                        <CardProducto imagen={Images.product4}/>
                    </Slide>
                    <Slide width="20%">
                        <CardProducto imagen={Images.product5}/>
                    </Slide>
                    <Slide width="20%">
                        <CardProducto imagen={Images.product6}/>
                    </Slide>
                </Slideshow>
            </div>
            <div className="add-section4">
                <Slideshow controles={false} autoplay={true} velocidad="2000" intervalo="700">
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads1} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads2} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads3} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads4} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads5} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads6} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads7} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads8} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads9} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads10} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads11} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads12} alt=""/>
                            </a>
                        </Slide>
                        <Slide width="10%">
                            <a href="#">
                                <img src={Images.ads13} alt=""/>
                            </a>
                        </Slide>
                    </Slideshow>
            </div>
        </div>
    )
}

export default Inicio;