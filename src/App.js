import React, {useState, useEffect} from "react";
//import { Cards, Chart, CountryPicker } from "./Components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Active from "./Components/Active/Active";
import Infected from "./Components/Infected/Infected";
import Recovered from "./Components/Recovered/Recovered";
import Deaths from "./Components/Deaths/Deaths";
import styles from "./App.module.css";
import { fetchData } from "./api";
//import coronaImage from "./images/image.png";
//import Footer from "./Components/Footer/Footer";
import DashBoard from "./DashBoard";


// const DashBoard= () => {
  
//   const [data, setData]= useState({});
//   const [country, setCountry]= useState("");

//   useEffect(() => {
//     const dataFetch= async () => {
//       const fetchedData = await fetchData();
//       setData(fetchedData);
//     };
//     dataFetch();
//   }, []);
  
//    const handleCountryChange = async (country) => {
//     const fetchedData = await fetchData(country);
//     setData(fetchedData);
//     setCountry(country);
//   };
  
    
//     return (
//       <div className={styles.container}>
//         <div className={styles.img}>
//         <img className={styles.image} src={coronaImage} alt="COVID-19" />
        
//         <br />
//         <br />
//         <text>
//           <b>Global and Country Wise Cases of Corona Virus</b>
//         </text>
//         <br />
//         <text>
//           <i>(For a Particular country, select a Country from below)</i>
//         </text>
//         <br />
//         <br />
//         </div>
//         <Cards data={data} country={country} />
//         <CountryPicker handleCountryChange={handleCountryChange} />
//         <Chart data={data} country={country} />
//         <Footer />
//       </div>
//     );
  
// }

export default function App() {
  const [data, setData]= useState({});
  const [country, setCountry]= useState("");

  useEffect(() => {
    const dataFetch= async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    dataFetch();
  }, []);
  
   const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };
  
  return (
    <Router>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route   path="/Active" >
            <Active data={data} country={country} />
          </Route>
          <Route  path="/Infected">
            <Infected data={data} country={country} />
          </Route>
          <Route   path="/Deaths">
            <Deaths data={data} country={country} />
          </Route>
          <Route  path="/Recovered">
            <Recovered data={data} country={country} />
          </Route>
          <Route exact path="/">
            <DashBoard data={data} country={country} handleCountryChange={handleCountryChange} />
          </Route>
        </Switch>
      
    </Router>
  );
}


// import React, { useState, useEffect } from "react";
// import { Cards, CountryPicker, Chart } from "./Components";
// import { fetchData } from "./api/";
// import styles from "./App.module.css";
// import Footer from "./Components/Footer/Footer";
// import image from "./images/image.png";

// const App = () => {
//   const [data, setData] = useState({});
//   const [country, setCountry] = useState();

//   const handleCountryChange = async (country) => {
//     const data = await fetchData(country);
//     setCountry(country);
//     setData(data);
//   };

//   useEffect(() => {
//     async function loadData() {
//       const data = await fetchData();
//       setData({ data });
//     }
//     loadData();
//   }, []);

//   console.log(data);

//   return (
//     <div className={styles.container}>
//       <img className={styles.image} src={image} alt="COVID-19" />
//       <br />
//       <text>
//         <b>Global and Country Wise Cases of Corona Virus</b>
//       </text>
//       <br />
//       <text>
//         <i>(For a Particlar select a Country from below)</i>
//       </text>
//       <br />
//       <br />
//       <Cards data={data} country={country} />
//       <CountryPicker handleCountryChange={handleCountryChange} />
//       <Chart data={data} country={country} />
//       <Footer />
//     </div>
//   );
// };

// export default App;
