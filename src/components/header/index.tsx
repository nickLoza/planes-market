import { AiOutlineUser, AiOutlineMenu} from "react-icons/ai"; 
import logo from "../../assets/images/logo.png"


import { NavLink } from "react-router-dom";
import { useState } from "react";



function Header() {

	const [ toggle, setToggle ] = useState<boolean>(false);


	function handleOnClickToggle(){
		setToggle(!toggle);
	}
	return (
		<div className="header">
			<div className="header__logo">
				<NavLink to={"home"}><img src={logo} alt="logo" className="header__logo-img"/></NavLink>
			</div>

			<div className="header__nav">
				<ul className={toggle?"header__nav-menu menu active" : "header__nav-menu menu"}>
					<li className="menu__item">
						<NavLink className="menu__item-link hover-grey" to="home">Home</NavLink>
					</li>
					<li className="menu__item">
						<NavLink className="menu__item-link hover-grey" to="buy">Buy</NavLink>
					</li>
				</ul>
			</div>
			<div className="header__icons">
				<AiOutlineMenu id="menu" className="header__icons-toggle hover-grey" onClick={handleOnClickToggle}/>
			</div>
		</div>
		
	)
}

export default Header