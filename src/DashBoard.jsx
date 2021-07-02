import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";

import styles from "./DashBoard.module.css";
//import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import Footer from "./Components/Footer/Footer";


const DashBoard = ({ data, country, handleCountryChange }) => {
    return (
      <div className={styles.container}>
        <div className={styles.img}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        
        <br />
        <br />
        <text>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </text>
        <br />
        <text>
          <i>(For a Particular country, select a Country from below)</i>
        </text>
        <br />
        <br />
        </div>
        <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={handleCountryChange} country={country} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
}

export default DashBoard;
