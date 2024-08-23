import Link from "next/link";
import { useStore } from "../store";

export default function HomeServices() {
	const { state } = useStore();

	if (state.isIndia) {
		return (
			<div className='homeServicesWrapper'>
				<h1 className='homeServicesHeading'>Services We Offer</h1>
				<div className='homeServicesCards'>
					<div className='homeServicesCard'>
						<h2 className='homeServicesCardTitle'>Architecture</h2>
						<p className='homeServicesCardDescription'>
							At D2A Atelier, we specialize in creating exceptional
							architectural designs.
						</p>
						<div className='homeServicesCardButton'>
							<Link href='/services'>
								<a className='homeServicesKnowMore'>Know More</a>
							</Link>
						</div>
					</div>
					<div className='homeServicesCard'>
						<h2 className='homeServicesCardTitle'>Interior Designing</h2>
						<p className='homeServicesCardDescription'>
							Transform your space into a work of art with our innovative
							interior design solutions.
						</p>
						<div className='homeServicesCardButton'>
							<Link href='/services'>
								<a className='homeServicesKnowMore'>Know More</a>
							</Link>
						</div>
					</div>
					<div className='homeServicesCard'>
						<h2 className='homeServicesCardTitle'>Landscaping</h2>
						<p className='homeServicesCardDescription'>
							Enhance the beauty of your outdoor spaces with D2A Atelier&#39;s
							expert landscaping services.
						</p>
						<div className='homeServicesCardButton'>
							<Link href='/services'>
								<a className='homeServicesKnowMore'>Know More</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='homeServicesWrapper'>
				<h1 className='homeServicesHeading'>Services We Offer</h1>
				<div className='homeServicesCards'>
					<div className='homeServicesCard'>
						<h2 className='homeServicesCardTitle'>AutoCAD</h2>
						<p className='homeServicesCardDescription'>
							D2A offers precision and accuracy in technical drawings with our
							AutoCAD Drafting Service.
						</p>
						<div className='homeServicesCardButton'>
							<Link href='/services-we-offer/auto-cad/'>
								<a className='homeServicesKnowMore'>Know More</a>
							</Link>
						</div>
					</div>
					<div className='homeServicesCard'>
						<h2 className='homeServicesCardTitle'>SketchUp</h2>
						<p className='homeServicesCardDescription'>
							Bring your ideas to life with D2A&#39;s expert SketchUp services
							and unleash your creative potential.
						</p>
						<div className='homeServicesCardButton'>
							<Link href='/services-we-offer/sketchup/'>
								<a className='homeServicesKnowMore'>Know More</a>
							</Link>
						</div>
					</div>
					<div className='homeServicesCard'>
						<h2 className='homeServicesCardTitle'>BIM</h2>
						<p className='homeServicesCardDescription'>
							Experience comprehensive project planning and management with
							D2A&#39;s BIM services.
						</p>
						<div className='homeServicesCardButton'>
							<Link href='/services-we-offer/bim/'>
								<a className='homeServicesKnowMore'>Know More</a>
							</Link>
						</div>
					</div>
					<div className='homeServicesCard'>
						<h2 className='homeServicesCardTitle'>3D Visualization</h2>
						<p className='homeServicesCardDescription'>
							D2A&#39;s 3D Visualization services bring your designs to life
							with stunning realism.
						</p>
						<div className='homeServicesCardButton'>
							<Link href='/services-we-offer/3d-visualization/'>
								<a className='homeServicesKnowMore'>Know More</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
