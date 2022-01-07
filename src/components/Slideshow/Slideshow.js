import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slideshow.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Slideshow = ({ products }) => {
  const [img, setImg] = useState(0);
  const [toggle, setToggle] = useState(false);
  const length = products.length;

  useEffect(() => {
    setTimeout(() => setToggle((prevToggle) => !prevToggle), 3000);
    return () => nextSlide();
  }, [toggle]);

  const nextSlide = () => {
    setImg(img === length - 1 ? 0 : img + 1);
  };

  const prevSlide = () => {
    setImg(img === 0 ? length - 1 : img - 1);
  };

  if (!Array.isArray(products) || products.lenth <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <AiOutlineDoubleLeft className="left-arrow" onClick={prevSlide} />
      <AiOutlineDoubleRight className="right-arrow" onClick={nextSlide} />
      {products.map((prod, index) => {
        const path = `/products/${prod.id}`;
        return (
          <Link to={path} key={prod.id}>
            <div
              className={index === img ? "slide active" : "slide"}
              key={index}
            >
              {index === img && (
                <img src={prod.img_url} alt="Product" className="image" />
              )}
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Slideshow;
