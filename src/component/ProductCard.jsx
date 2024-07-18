import React, { useContext } from "react";
import { CardContext } from "../contexts/cardContext";


export default function ProductCard(props) {

    const cardContext = useContext(CardContext)
    console.log(cardContext);

    return (
        <div className='col-3'>
            <div className="card">
                <img src={props.randomNumber.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.randomNumber.name}</h5>
                    <p className="card-text">{props.randomNumber.description}</p>
                    <button className="btn btn-primary" 
                    onClick={ () => {
                        cardContext.addProductToCard(props.randomNumber)
                    }}
                    >Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    )
}