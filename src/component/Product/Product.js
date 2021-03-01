import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img ,name ,seller,price,stock} = props.product;
    return (
        <div className = "product">
           <div>
               <img src ={img}></img>

           </div>
           <div>
           <h4 className ="productName">{name}</h4>
           
           
           <p><small>by : {seller}</small></p>
           <p>${price}</p>
           <p><small>Only {stock} left in stock - order soon</small></p>
           <button className = "mainButton" onClick={() => props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
 
           </div>
           
        </div>
    );
};

export default Product;