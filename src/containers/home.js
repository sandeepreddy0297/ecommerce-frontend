import React, { Component } from 'react';
import {getAllProducts} from "../actions/product";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import ProductListItem from "./productListItem"
class Home extends Component {
    componentDidMount() {
        console.log(" products component did mount!!", this.props.getAllProducts());
        this.props.getAllProducts();
    }
    renderProductList= () =>{

        if(this.props.products.length > 0){

          let allProds= this.props.products.map( product => {
               
               return <ProductListItem history={this.props.history} key={product.pid} product={product}></ProductListItem>
      
           })

           return allProds;

        }
        else
        {
            return <li>No Products! Please wait, the products are loading</li>
        }
    }
    render() { 
        console.log(this.props);
        return ( 
            <React.Fragment>
                <h1>Iam in home component</h1>

               <ul>
                   {this.renderProductList()}
               </ul>
            </React.Fragment>
         );
    }
}
 
function mapStateToProps(appState){
    return {products: appState.products}
} 
function mapDispatchToProps(dispatch){
return bindActionCreators({getAllProducts},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);