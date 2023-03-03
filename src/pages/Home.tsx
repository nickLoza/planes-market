import { NavLink } from "react-router-dom";
import Helmet from "../components/helmet/Helmet";
import { SlPlane } from "react-icons/sl";

import heroImg from "/assets/images/hero-plane.png";

function Home() {
	return (
		<Helmet title={"home"}>
			<div className="home main">
				<section className="home__hero">
					<div className="home__hero-text text">
						<h2 className="text__h2">Find your dreams airfract</h2>
						<p className="text__p">
							Incidunt, minima, sint! Adipisci itaque atque vitae officia quaerat. Ipsa quae esse, ipsum at recusandae qui deserunt excepturi nihil ipsa quae esse, ipsum at recusandae qui deserunt excepturi nihil  accusamus fugit. Dolor.
						 </p>
						<div className="text__links">
							<NavLink to="/buy" className="text__link">See aircrafts</NavLink>
						</div>
					</div>
					<img className="home__hero-img" src={heroImg} alt="plane"/>
				</section>
				<section className="home__about">
					<h4 className="home__about-title">Your Local Aviation Marketplace</h4>
					<p className="home__about-welcome">Welcome to AirBuy!
					<SlPlane/></p>
					<p className="home__about-description">
						We appreciate you considering our site to buy your aircraft. If you're buying a plane or helicopter, AirBuy is the most reliable and cost-effective market to do it. No other website in U.S.A comes close in terms of usability, functionality and site traffic.
					</p>
				</section>
			</div>
		</Helmet>
	)
}

export default Home