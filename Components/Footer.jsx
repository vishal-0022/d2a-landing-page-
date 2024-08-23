import Link from "next/link";
import { useStore } from "../store";

export default function Footer() {
	const { state } = useStore();

	return (
		<div className='footerWrapper'>
			<div className='footerColAbout'>
				<Link href='/'>
					<img src='/Assets/LogoWhite.png' alt='logo' className='footerLogo' />
				</Link>
				<div className='footerAbout'>
					{state.isIndia ? (
						<p className='footerContent'>
							D2A Atelier is a design studio that provides a wide range of
							services in the field of architecture, interior design, and
							landscape design. We are a team of young and passionate architects
							and designers who are committed to providing the best design
							solutions to our clients.
						</p>
					) : (
						<p className='footerContent'>
							D2A Atelier is a premier drafting and design firm based in New
							Delhi, India. With a combined experience of 8 years, our team of
							professional architects offer a wide range of services, including
							AutoCAD drafting, SketchUp, BIM, and 3D visualization. We are
							dedicated to delivering high-quality solutions and ensuring a
							seamless experience for our clients, from start to finish.
						</p>
					)}
				</div>
				<div className='footerListItem'>
					<Link href='/about-us'>
						<a className='footerContent'>Read More &gt;</a>
					</Link>
				</div>
			</div>
			<div className='footerCol'>
				<h3 className='footerTitle'>QUICK LINKS</h3>
				<ul className='footerList'>
					<li className='footerListItem'>
						<Link href='/'>
							<a className='footerContent'>
								<img
									src='/Assets/ic-sideArrow.svg'
									alt='sideArrow'
									className='footerSideArrow'
								/>
								Home
							</a>
						</Link>
					</li>
					<li className='footerListItem'>
						<Link href='/about-us'>
							<a className='footerContent'>
								<img
									src='/Assets/ic-sideArrow.svg'
									alt='sideArrow'
									className='footerSideArrow'
								/>
								Who are we
							</a>
						</Link>
					</li>
					<li className='footerListItem'>
						<Link href='/contact-us'>
							<a className='footerContent'>
								<img
									src='/Assets/ic-sideArrow.svg'
									alt='sideArrow'
									className='footerSideArrow'
								/>
								Contact Us
							</a>
						</Link>
					</li>
					<li className='footerListItem'>
						<Link href={state.isIndia ? `/services` : `/services-we-offer`}>
							<a className='footerContent'>
								<img
									src='/Assets/ic-sideArrow.svg'
									alt='sideArrow'
									className='footerSideArrow'
								/>
								Services
							</a>
						</Link>
					</li>
					{state.isIndia && (
						<li className='footerListItem'>
							<Link href='/portfolio'>
								<a className='footerContent'>
									<img
										src='/Assets/ic-sideArrow.svg'
										alt='sideArrow'
										className='footerSideArrow'
									/>
									Our Projects
								</a>
							</Link>
						</li>
					)}
					{!state.isIndia && (
						<li className='footerListItem'>
							<Link href='/faqs'>
								<a className='footerContent'>
									<img
										src='/Assets/ic-sideArrow.svg'
										alt='sideArrow'
										className='footerSideArrow'
									/>
									FAQs
								</a>
							</Link>
						</li>
					)}
				</ul>
			</div>
			<div className='footerCol'>
				<h3 className='footerTitle'>CONTACT US</h3>
				<ul className='footerList'>
					<li className='footerListItem'>
						<a
							href='https://goo.gl/maps/vnCG1ZEpT2ete9zp8'
							target='_blank'
							rel='noreferrer'
							className='footerLink footerContent'>
							<img
								src='/Assets/ic-home.png'
								alt='location'
								className='footerContactIcon'
							/>
							S-469, <br />
							Basement Floor, <br />
							Greater Kailash-1 <br />
							New Delhi, Delhi 110048
						</a>
					</li>
					<li className='footerListItem'>
						<a href='tel:+919990632664' className='footerLink footerContent'>
							<img
								src='/Assets/ic-phone.png'
								alt='phone'
								className='footerContactIcon'
							/>
							+91 9990632664
						</a>
					</li>

					<li className='footerListItem'>
						<a
							href='mailto:admin@d2aatelier.com'
							className='footerLink footerContent'>
							<img
								src='/Assets/ic-mail.png'
								alt='mail'
								className='footerContactIcon'
							/>
							admin@d2aatelier.com
						</a>
					</li>
				</ul>
				<h3 className='footerTitle'>STAY CONNECTED</h3>
				<div className='footerSocial'>
					{state.isIndia ? (
						<>
							<a
								href='https://www.instagram.com/d2aatelier/'
								target='_blank'
								rel='noreferrer'
								className='footerSocialLink'>
								<img
									src='/Assets/instagram.png'
									alt='instagram'
									className='footerSocialIcon'
								/>
							</a>
							<a
								href='mailto:admin@d2aatelier.com'
								target='_blank'
								rel='noreferrer'
								className='footerSocialLink'>
								<img
									src='/Assets/gmail.png'
									alt='instagram'
									className='footerSocialIcon'
								/>
							</a>
						</>
					) : (
						<>
							<a
								href='https://www.facebook.com/profile.php?id=100081276530407'
								target='_blank'
								rel='noreferrer'
								className='footerSocialLink'>
								<img
									src='/Assets/facebook.png'
									alt='facebook'
									className='footerSocialIcon'
								/>
							</a>
							<a
								href='https://www.linkedin.com/company/d2a-atelier/'
								target='_blank'
								rel='noreferrer'
								className='footerSocialLink'>
								<img
									src='/Assets/linkedin.png'
									alt='linkedin'
									className='footerSocialIcon'
								/>
							</a>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
