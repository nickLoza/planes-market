import { Link } from "react-router-dom";





function NotFound() {
	return (
		<div className="error-404">
			<h2 className="error-404__h2">Page not found!</h2>
			<img className="error-404__img" src="https://www.hiverlab.com/images/casestudy/aircraft.png" alt=""/>
			<p className="error-404__p">Go to <Link className="error-404__link" to="/">Home Page</Link></p>
		</div>
	)
}

export default NotFound