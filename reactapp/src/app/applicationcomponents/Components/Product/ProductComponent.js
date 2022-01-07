import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../../../state/product/productAction";
import DisplayProduct from "./DisplayProduct";


let ProductComponent = ()=>{
    
    const defaultProduct = useSelector((state)=>state.productReducer.defaultProduct)
    const dispatchToSaveProduct = useDispatch()

    //initializes the name and returns a callback to save name on state change
    const [name, setName] = useState(defaultProduct.name); 
    const [price, setPrice] = useState(defaultProduct.price);
    const [desc, setDescription] = useState(defaultProduct.desc);
    const [rating, setRating] = useState(defaultProduct.rating); 

    const saveProductClick = (evt) => {
        let productObj = {name, price, desc, rating};
        alert("We are going to save this product - "+ JSON.stringify(productObj));
        
        dispatchToSaveProduct(saveProduct(productObj))

        evt.preventDefault()
    }

    return(
        <>
             <h2> Products </h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                          placeholder="Product Price"
                          onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" value={desc} 
                          placeholder="Please Describe the product"
                          onChange={(evt)=>setDescription(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                          placeholder="Ratings"
                          onChange={(evt)=>setRating(evt.target.value)} />
                    </div>
                    
                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Product"} 
                        onClick={saveProductClick}/>
                    </div>
                <br/>
                <DisplayProduct/>
            </section>
        </>
    )
}

export default ProductComponent;