import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import SubTitle from "./components/subtitle";
import Description from "./components/description";
import ProjectTitle from "./components/projectTitle";

import "./styles.css";

function Uberviz() {
  useEffect(() => {
    document.title = "Data";
  }, []);

  return (
    <div className="CenterContainer">
      <div className="Container">
        <div className="BreadcrumbsContainer">
          <NavLink to="/" className="Breadcrumbs">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/uberviz" className="Breadcrumbs">
            Uber Trip Viz
          </NavLink>
        </div>
        <ProjectTitle projecttitle="Visualizing My Uber Trips" />
        <Description description="Ever since I took a data science course in college, I've always been interested in creating things with data. With the help of Uber data, Python, Pandas, and Kepler.gl, I visualized my Uber trips. After getting a CSV of my Uber trips history, I cleaned up the data with Python and Pandas. Then it was only a matter of dropping in the cleaned CSV into Kepler.gl." />
        <img src="./time.gif" className="ProjectAsset" />
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Home />, rootElement);

export default Uberviz;
