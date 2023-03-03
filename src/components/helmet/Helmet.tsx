
interface PropTypes{
	title: string|undefined;
	children: JSX.Element
}

function Helmet({ title, children }: PropTypes) {

	document.title = "Airbuy -"+ title;
	return (
		<div className="w-100">
			{ children }
		</div>
	)
}

export default Helmet