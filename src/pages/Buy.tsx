
import Helmet from "../components/helmet/Helmet"
import products from "../assets/data/products"
import { useState } from "react"
import { Link } from "react-router-dom";

function Buy() {

	const [ selectValue, setSelectValue ] = useState<string>("all")

	let filteredProducts = getProducts(selectValue)

	function getProducts(filter:string){
		if(filter=="all"){
			return products;
		}else{
			return products.filter(i=>i.category==filter)
		}
	}


	function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>){
		setSelectValue(e.target.value)
	}

	return (
		<Helmet title={"buy"}>
			<div className="buy main">
				<div className="buy__filter">
					<h2 className="buy__filter-title">Filter by</h2>
					<select className="buy__filter-select" value={selectValue} onChange={handleOnChange}>
						<option value="all">All</option>
						<option value="airplane">Airplanes</option>
						<option value="warbird">Warbirds</option>
						<option value="helicopter">Helicopters</option>
					</select>
				</div>
				<div className="buy__products">
					{filteredProducts.map((item)=>{
						return(
							<Link key={item.id} to={`/buy/${item.id}`}>
							<div className="buy__product">
								<img src={item.imgUrl} className="buy__product-img" alt="product"/>
								<p className="buy__product-title">{item.productName}</p>
								<p className="buy__product-price">{item.price}$</p>
							</div>
							</Link>
						)
					})}
				</div>
			</div>
		</Helmet>
	)
}

export default Buy