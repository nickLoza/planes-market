
import Header from "../header";
import Footer from "../footer";
import Routers from "../../routers/Routers";

function Layout() {
	return <>
		<Header/>
		<div>
			<Routers/>
		</div>
		<Footer/>
	</>
}

export default Layout