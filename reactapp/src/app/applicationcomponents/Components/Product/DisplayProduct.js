import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../State/Product/ProductAction";
import DisplayProductDetails from "./DisplayDetailProduct";

const DisplayProduct = (props)=>{
    const productList = useSelector((state)=>state.productReducer.products)

    //we need to make call to fetch products
    //like fetch we have axios it uses async and await
    const fetchProductsDispatch = useDispatch();

    //componentDidMount : by initializing the parameters as dependency
    useEffect(()=>{
        fetchProductsDispatch(fetchProducts())
    },[])

    return(
        <>
            {productList && productList.length > 0 ?
                productList.map((product)=>{
                    return <DisplayProductDetails product={product} key={product._id} />
                })
                :
                <b>{"No Products To Display"}</b>}
        </>
    )

}

export default DisplayProduct;