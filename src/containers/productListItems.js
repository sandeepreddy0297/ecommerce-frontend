import React, { Component } from 'react';
class ProductListItems extends Component {
    
    render() { 
        let product=this.props.product;
        return ( 
            <li >{product.product_name} {product.price} <img src={product.product_image}></img> </li>
         );
    }
}
 
export default ProductListItems;