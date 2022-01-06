import React from "react";
import "./Department.css";
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

// function Department({setDeptFilter}) {
//   const depart = [
//     { cat: "Appliances", img: RiFridgeFill },
//     { cat: "Bath & faucets", img: FaBath },
//     { cat: "Blinds & Window", img: GiWindow },
//     { cat: "Building Material", img: GiWoodBeam },
//     { cat: "Electrical", img: MdElectricalServices },
//     { cat: "Tools", img: FaToolbox },
//     { cat: "Lighting & Ceiling fans", img: GiLightBulb },
//     { cat: "Outdoor living", img: MdOutlineOutdoorGrill },
//     { cat: "Paint", img: AiFillFormatPainter },
//     { cat: "Plumbing", img: MdPlumbing },
//     { cat: "Heating and cooling", img: GiHeatHaze },
//     { cat: "Kitchen", img: GiKitchenTap },
//   ];
function Department({ setDeptFilter }) {
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
    const dept = dep.cat;
    return (
      <span
        onClick={() => setDeptFilter(dept)}
        key={Math.random()}
        className="department-container-card"
      >
        <div className="department-container-cardInfo">
          <div className="icon">
            <Icon />
          </div>
          <h4>{dep.cat}</h4>
        </div>
      </span>
    );
  });

  return (
    <IconContext.Provider value={{ color: "#fff", size: 30 }}>
      <div id="department" className="department-section">
        <div className="department-wrapper">
          <h1 className="department-heading"></h1>
          <div className="department-container">{departmentDisplay}</div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Department;
