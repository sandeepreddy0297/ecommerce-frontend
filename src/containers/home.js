import React, { Component } from 'react';
import ProductListItems from "./productListItems"
class Home extends Component {

    renderProductsList =()=>{
        let allproducts =this.props.products.map( product =>{
            return <ProductListItems  key={products.pid} product={product}></ProductListItems>
        })
    }
   
    render() { 
        return ( 
            <React.Fragment>
                <h1>Iam in home component</h1>

                <ul>{this.renderProductsList}</ul>
            </React.Fragment>
         );
    }
}
 
export default Home;