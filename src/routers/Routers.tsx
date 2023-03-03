import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Buy from "../pages/Buy";
import NotFound from "../pages/NotFound";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function Routers() {
	return <Routes>

		<Route path="/" element={<Navigate to ="home"/>}/>
		<Route path="home" element={<Home/>}/>
		<Route path="buy" element={<Buy/>}/>
		<Route path="buy/:id" element={<ProductDetails/>}/>
		<Route path="*" element={<NotFound/>}/>
	</Routes>
}

export default Routers