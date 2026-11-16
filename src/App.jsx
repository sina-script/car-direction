import { useState } from "react";
import "./App.css";
import carsList from "./../data/cars";
import BrandCard from "./components/BrandCard/BrandCard";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("unselected");

  return (
    <div className="motor-wrap">
      <div className="glow-top"></div>

      <div className="container">
        <header className="header">
          <div className="brand-tag">PREMIUM ARCHIVE</div>
          <h1 className="title">
            BRANDS <span className="ruby-stroke">UNIT</span>
          </h1>

          <div className="select-mega-wrapper">
            <div className="select-inner-panel">
              <div className="panel-status"></div>

              <select
                id="origin-filter"
                className="real-black-select"
                value={selectedCountry}
                onChange={(event) => {
                  setSelectedCountry(event.target.value);
                }}
              >
                <option value="unselected">Choose one country</option>
                {carsList.map((country) => {
                  return <option key={country.id} value={country.title}>{country.title}</option>;
                })}
              </select>

              <div className="select-arrow"></div>
            </div>
            <div className="panel-shadow"></div>
          </div>
        </header>

        <section className="gallery">
          <div className="grid">
            {carsList.find((country) => {
              return country.title == selectedCountry;
            })
              ? carsList
                  .find((country) => {
                    return country.title == selectedCountry;
                  })
                  .category.map((brand) => {
                    return <BrandCard key={brand.step} {...brand}></BrandCard>;
                  })
              : ""}
          </div>
        </section>
      </div>
    </div>
  );
}
