import React from 'react';
import "./styles/Inicio.css"
import { Slideshow, Slide, div } from './Slideshow'
import CardProducto from './CardProducto'
import Images from './Images';

function Inicio () {
    return(
        <div className="cont-inicio">
            <div className="fix-inicio"></div>
            <div className="ad-seccion1">
                <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="8000">
                    <Slide>
                        <a href="#">
                            <img src={Images.ad1} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.ad2} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.ad3} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.ad4} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.ad5} alt=""/>
                        </a>
                    </Slide>
                    <Slide>
                        <a href="#">
                            <img src={Images.ad6} alt=""/>
                        </a>
                    </Slide>
                </Slideshow>
            </div>
            <div className="ad-seccion2">
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
            <div className="ad-seccion3">
                <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="10000" alturaSlide="200px"> 
                    
                        <div className="cont-card">
                            <img className="img-card" src={Images.product1}/>
                            <div className="producto">
                                <div className="p-nombre">Mouse Logitech G PRO X Superlight White</div>
                                <div className="p-tipo">Mouse</div>
                                <div className="p-precio">$4545</div>
                                <div className="p-carrito">Añadir al carrito</div>
                            </div>
                        </div>
                        <div className="cont-card">
                            <img className="img-card" src={Images.product2}/>
                            <div className="producto">
                                <div className="p-nombre">Mouse XPG PRIMER RGB 12000DPI</div>
                                <div className="p-tipo">Mouse</div>
                                <div className="p-precio">$5545</div>
                                <div className="p-carrito">Añadir al carrito</div>
                            </div>
                        </div>
                        <div className="cont-card">
                            <img className="img-card" src={Images.product3}/>
                            <div className="producto">
                                <div className="p-nombre">Mouse XPG Infrarex M20 RGB</div>
                                <div className="p-tipo">Mouse</div>
                                <div className="p-precio">$7545</div>
                                <div className="p-carrito">Añadir al carrito</div>
                            </div>
                        </div>
                        <div className="cont-card">
                            <img className="img-card" src={Images.product4}/>
                            <div className="producto">
                                <div className="p-nombre">Mouse Corsair M55 Pro RGB multigrip Ambidiestro Black</div>
                                <div className="p-tipo">Mouse</div>
                                <div className="p-precio">$445</div>
                                <div className="p-carrito">Añadir al carrito</div>
                            </div>
                        </div>
                        <div className="cont-card">
                            <img className="img-card" src={Images.product5}/>
                            <div className="producto">
                                <div className="p-nombre">Mouse Logitech G PRO X Superlight Black</div>
                                <div className="p-tipo">Mouse</div>
                                <div className="p-precio">$10200</div>
                                <div className="p-carrito">Añadir al carrito</div>
                            </div>
                        </div>
                        <div className="cont-card">
                            <img className="img-card" src={Images.product6}/>
                            <div className="producto">
                                <div className="p-nombre">Mouse XPG Infrarex M20 RGB</div>
                                <div className="p-tipo">Mouse</div>
                                <div className="p-precio">$1000</div>
                                <div className="p-carrito">Añadir al carrito</div>
                            </div>
                        </div>
                </Slideshow>
            </div>
            <div className="ad-seccion4">
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