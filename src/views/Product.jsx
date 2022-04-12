import { useState,useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Product=()=>{
    const {id}=useParams();
    useEffect(() => {
        fetchProduct();
      }, []);
    const [product, setProduct]=useState(null);
    const fetchProduct = () => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    }
    return (
        <div className="mt-5">
        {product ? (
          <div className="d-flex align-items-center justify-content-center flex-wrap container">
            <div className="w-25 me-4">
              <img className="w-100" src={product.image} alt="" />
            </div>
            <div>
              <h2 className="text-primary">{product.title}</h2>
              <p className="text-danger">{product.category}</p>
              <p className="text-success">{product.price}</p>
              <p className="text-warning">{product.rating.rate}</p>
              <p className="text-secondary">{product.title}</p>
            </div>
          </div>
        ) : (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10%"}}>
              <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </div>
        )}
      </div>
    );
}
export default Product;