import axios from "axios";
const BASE_URL="http://localhost:9017/admin/";
export function getAllProducts(){
    console.log("iam in get all products action!!!");
    var promise=axios.get(`${BASE_URL}allProducts`);
    console.log("promise by get allproducts",promise)
    return{
        type:"ALL_PRODUCTS",
        payload:promise
    }
}

export function getSpecificProduct(){
    console.log("iam in  get specific product!!");
    var promise=(`${BASE_URL}product`);
    return{
        type:"CURRENT_PRODUCT",
        payload:promise
    }
}