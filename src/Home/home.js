import React, { useState } from "react";
import "../styles/home.css";
import Image1 from "../assets/homeimg1.jpg";
import Image2 from "../assets/homeimg2.jpg";
import Image3 from "../assets/homeimg3.jpg";
import corner from "../assets/homecorner.png";

export const Home = () => {
  const [page, setPage] = useState(1);
  const slides = [{ source: Image1 }, { source: Image2 }, { source: Image3 }];
  const changePage = (e) => {
    if (e.target.id === "right") {
      if (page < 3) {
        setPage(page + 1);
      } else {
        setPage(1);
      }
    } else if (e.target.id === "left") {
      if (page > 1) {
        setPage(page - 1);
      } else {
        setPage(3);
      }
    }
  };
  return (
    <div className="home-container">
      <div className="image-container">
        <img className="image1" src={slides[page - 1]?.source} alt="slide" />
      </div>
      <div className="glassmorph">
        {page === 1
          ? "LATA MANGESHKAR CHOWK"
          : page === 2
          ? "RAM MANDIR"
          : "GUPTAR GHAT"}
      </div>
      <div className="arrow-container right-arrow">
        <div
          className="arrow right"
          id="right"
          onClick={(e) => changePage(e)}
        ></div>
      </div>
      <div className="arrow-container left-arrow">
        <div
          className="arrow left"
          id="left"
          onClick={(e) => changePage(e)}
        ></div>
      </div>
      <div>
        <img className="corner-image left-corner" src={corner} alt="corner" />
      </div>
      <div>
        <img className="corner-image right-corner" src={corner} alt="corner" />
      </div>
    </div>
  );
};
