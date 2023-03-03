import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { AiOutlineCloseCircle, AiOutlineMail } from "react-icons/ai";
import NotFound from "./NotFound";
import products from "../assets/data/products";
import Helmet from "../components/helmet/Helmet";
import emailjs from '@emailjs/browser';


interface ContactType{
	productName: string|undefined
}


type MsgTypes = "writing"|"sent"|"error"; 


const emailJsService = import.meta.env.VITE__EMAILJS__SERVICE;
const emailJsTemplate = import.meta.env.VITE__EMAILJS__TEMPLATE;
const emailJsKey = import.meta.env.VITE__EMAILJS__KEY;


function ProductDetails() {

	const [ showContact, setShowContact ] = useState<boolean>(false);
	const [ msgState, setMsgState ] = useState<MsgTypes>("writing")
	const [ btnState, setBtnState ] = useState<string>("Send")

	const { id } = useParams()
	const product  = products.find(item=>item.id===id)

	function handleOnClick(){
		setShowContact(!showContact)
	}

	useEffect(()=>{
		setMsgState("writing")
		setBtnState("Send")
	},[showContact])


	const ContactUs = ({productName}:ContactType) => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnState("Sending...")
    emailjs.sendForm(emailJsService, emailJsTemplate, e.currentTarget, emailJsKey)
      .then((result) => {
          setMsgState("sent")
          setBtnState("Sent")
      }, (error) => {
          setMsgState("error")
      });
  };

  return (
    <form className="product-details__contact-form form" ref={form} onSubmit={sendEmail}>
  	  <h4 className="form__title">Send us an email</h4>
      <label className="form__label">Aircraft</label>
      <input className="form__input" type="text" name="userProduct" value={productName} readOnly required/>
      <label className="form__label">Your email</label>
      <input className="form__input" type="email" name="userEmail"  required/>
      <label className="form__label">Message</label>
      <textarea className="form__textarea" name="userMsg" style={{width:"100%",height:"200px"}} required/>
      <input className="form__submit" type="submit" value={btnState}/>
    </form>
  );
};

	function MsgSent(){
		return (
			<div className="product-details__contact-sent contact__sent">
				<h4 className="contact__sent-h4">Message sent!</h4>
				<p className="contact__sent-p">AirBuy will send you an email soon</p>
			</div>
		)
	}

	return (
		<Helmet title={product?.productName}>
			<div className="product-details main-content main">
					{product?<><img src={product?.imgUrl} alt="product" className="product-details__img" /><div className="product-details__text">
                    <h4 className="product-details__text-h4">{product?.productName}</h4>
                    <p className="product-details__text-price">{product?.price}$</p>
                    <div className="product-details__text-buttons buttons">
                        <button className="buttons__btn" onClick={handleOnClick}><AiOutlineMail className="buttons__icon" />Email seller</button>
                    </div>
                </div></>:<NotFound/>}
				<div className={showContact? "product-details__contact active" : "product-details__contact"}>
					{msgState === "writing" && <ContactUs productName={product?.productName}/>}
					{msgState === "sent" && <MsgSent/>}
					<AiOutlineCloseCircle className="product-details__contact-btn" onClick={handleOnClick}/>
				</div>
			</div>
		</Helmet>
	)
}


export default ProductDetails