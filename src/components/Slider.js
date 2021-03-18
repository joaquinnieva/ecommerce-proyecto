import React from 'react';
import {Slideshow, Slide} from './Slideshow'
import Images from './Images';


const Slider = () => {
	return (
		<>
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="6000">
				<Slide>
					<a href="#">
						<img src={Images.add1} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.add2} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.add3} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.add4} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.add5} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.add6} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.add7} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.add8} alt="alt"/>
					</a>
				</Slide>
			</Slideshow>

			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="10000">
				<Slide>
					<a href="#">
						<img src={Images.nvidia} alt="alt"/>
					</a>
				</Slide>
				<Slide>
					<a href="#">
						<img src={Images.compragamer} alt="alt"/>
					</a>
				</Slide>
			</Slideshow>

			<Slideshow controles={false} autoplay={true} velocidad="3000" intervalo="3000">
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads1} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads2} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads3} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads4} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads5} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads6} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads7} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads8} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads9} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads10} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads11} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads12} alt="alt"/>
					</a>
				</Slide>
				<Slide tamaño="10%">
					<a href="#">
						<img src={Images.ads13} alt="alt"/>
					</a>
				</Slide>
			</Slideshow>
		</>
	);
}
 
export default Slider;