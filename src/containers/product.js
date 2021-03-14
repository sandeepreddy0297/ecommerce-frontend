import React from 'react';
import {bindActionCreators} from 'redux';
import {getSpecificProduct} from '../actions/product';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
class Product extends Component {
    componentDidMount() {
        this.props.getSpecificProduct(localStorage.getItem('currentProductId'));
    }
   
    render() { 
        console.log('currentProduct',this.props.currentProduct);
        return (  

            <div>
            <h2>Product View</h2>
            <div>
              <img  src={this.props.currentProduct.product_image}/>
              <div >
                <h4 >{this.props.currentProduct.product_name}</h4>
                <p >The price of the product is {this.props.currentProduct.price}</p>
               
                <NavLink to="/">back</NavLink>
              </div>
            </div>
            <br></br>
          
            </div>
        )
    }
}
 
function mapStatetoProps(appState){
    return {
        currentProduct:appState.currentProduct
    }
}
 export default connect(mapStatetoProps, dispatch => bindActionCreators({getSpecificProduct},dispatch) ) (Product);