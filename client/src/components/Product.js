import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Image from "../images/athirappalli.jpeg";
import "./product.css";
function Product({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(product)

  return (
    <>
      <div>
        <Link to={`/packageSingle/${product.id}`}>
        <div className="product--card">
          <img src={product.attraction} alt="Product Shoes" className="product--img" />
          <h4>{product.title}</h4>
          <p>
            {product.about}
          </p>
          <h2>{product.amount}</h2>
          <p>duration:{product.duration}</p>
          <p>Location:{product.location}</p>
          <p>rating:{product.rating}</p>
          <p> No_of_people:{product.no_of_people}</p>
         
        </div>
        </Link>
      </div>
    </>
  );
}

export default Product;
