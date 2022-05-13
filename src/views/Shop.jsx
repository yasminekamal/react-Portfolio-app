import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const Shop = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = () => {
        return fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <section className="d-flex flex-wrap justify-content-center">
            {
                products && products.length
                    ?
                    products.map((product) => {
                        return (
                            <Link
                                to={`/products/${product.id}`}
                                key={product.id}
                                className="product p-1 w-25 mb-2 me-2 border text-start"
                                style={{ textDecoration: 'none', color: "white" }}
                            >
                                <div className="d-flex justify-content-center mb-2" style={{ height: "250px" }}>
                                    <img width="50%" height="100%" src={product.image} alt="" />
                                </div>
                                <div style={{ backgroundColor: "teal", padding: "10px", height: "150px" }}>
                                    <h6>{product.title}</h6>
                                    <p>Price : {product.price}</p>
                                    <p>Rating : {product.rating.rate}</p>
                                </div>
                            </Link>
                        );
                    })
                    :
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>

                        <Spinner animation="grow" />
                    </div>
            }
        </section>

    );
}
export default Shop;