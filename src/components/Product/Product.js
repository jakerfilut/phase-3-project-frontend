import { React, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";
import './FilterBar.css';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons/lib";
import { RiFridgeFill } from "react-icons/ri";
import { FaBath, FaToolbox } from "react-icons/fa";
import {
  GiWindow,
  GiWoodBeam,
  GiLightBulb,
  GiGardeningShears,
  GiHeatHaze,
  GiKitchenTap,
} from "react-icons/gi";
import {
  MdElectricalServices,
  MdOutlineOutdoorGrill,
  MdPlumbing,
} from "react-icons/md";
import { AiFillFormatPainter } from "react-icons/ai";

function Product({ products, addToCart, productsToDisplay, setDeptFilter }) {
  const depart = [
    { cat: "Appliances", img: RiFridgeFill },
    { cat: "Bath & Faucets", img: FaBath },
    { cat: "Blinds & Windows", img: GiWindow },
    { cat: "Building Material", img: GiWoodBeam },
    { cat: "Electrical", img: MdElectricalServices },
    { cat: "Tools", img: FaToolbox },
    { cat: "Lighting & Ceiling Fans", img: GiLightBulb },
    { cat: "Outdoor Living", img: MdOutlineOutdoorGrill },
    { cat: "Paint", img: AiFillFormatPainter },
    { cat: "Plumbing", img: MdPlumbing },
    { cat: "Heating & Cooling", img: GiHeatHaze },
    { cat: "Kitchen", img: GiKitchenTap },
  ];

  const departmentDisplay = depart.map((dep, idx) => {
    const Icon = depart[idx].img;
    const dept = dep.cat
    return (
        <Link to="/products"  onClick={() => setDeptFilter(dept)} key={Math.random()} className="filterBar">
          <div className="filterBar-container">
            <div className="icon">
              <Icon />
            </div>
            <h4>{dep.cat}</h4>
          </div>
        </Link>
    );
  });

  return (
  <>
    <IconContext.Provider value={{ color: "#fff", size: 20 }}>
      <div id="filter" className="filter-section">
        <div className="filter-wrapper">
          <h1 className="filter-heading"></h1>
          <div className="filter-container">{departmentDisplay}</div>
        </div>
      </div>
    </IconContext.Provider>


    <div id="product" className="product__section">
      <div className="product__wrapper">
        <div className="product__container">
          {productsToDisplay.map((prod) => (
            <ProductCard key={prod.id} prod={prod} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  </>  
  );
}

export default Product;
