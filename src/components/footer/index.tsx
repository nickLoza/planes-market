
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";


function Footer() {
	return (
		<div className="footer">
			<div className="footer__group">
				<div className="footer__content content">
					<h4 className="content__title">Contact</h4>
					<p className="content__item">Phone: +999 999 999</p>
					<p className="content__item">Gmail: airbuy@fake.com</p>
				</div>
				<div className="footer__content content">
					<h4 className="content__title">Cities</h4>
					<p className="content__item">St. Bridget's Place Upper, Galway, H91 HP6A, Irlanda</p>
					<p className="content__item">F8P2+3P Cleveland, Ohio, U.S.A</p>
					<p className="content__item">43-1 Rue des Artisans, 14100 Lisieux, France</p>
				</div>
				<div className="footer__content content">
					<h4 className="content__title">Other information</h4>
					<p className="content__item">St. Bridget's Place Upper, Galway, H91 HP6A, Irlanda</p>
					<p className="content__item">F8P2+3P Cleveland, Ohio, U.S.A</p>
					<p className="content__item">43-1 Rue des Artisans, 14100 Lisieux, France</p>
				</div>
				<div className="footer__content content">
					<h4 className="content__title">Laws</h4>
					<p className="content__item">St. Bridget's Place Upper, Galway, H91 HP6A, Irlanda</p>
					<p className="content__item">F8P2+3P Cleveland, Ohio, U.S.A</p>
					<p className="content__item">43-1 Rue des Artisans, 14100 Lisieux, France</p>
				</div>
			</div>
			<div className="footer__socials">
				<BsInstagram className="footer__socials-icon"/>
				<BsTwitter className="footer__socials-icon"/>
				<BsFacebook className="footer__socials-icon"/>
			</div>
		</div>
	)
}

export default Footer