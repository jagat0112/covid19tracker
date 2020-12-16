import React, { useContext, useEffect } from "react";
import CoronaContext from "../Context/CoronaContext/coronaContext";
import Charts from "./Charts";
import PieChart from "./PieChart";
import PieChart2 from "./PieChart2";
import State from "./State";
import CountUp from "react-countup";
import NepalDistrict from "./NepalDistrict";

const Country = ({ match }) => {
  const SelectedCountry = match.params.country;
  const coronaContext = useContext(CoronaContext);

  useEffect(() => {
    coronaContext.getCountry(SelectedCountry);
    coronaContext.getHistory(SelectedCountry);
    coronaContext.getProvinceData();
    // eslint-disable-next-line
  }, []);

  const {
    country,
    countryInfo,
    cases,
    todayCases,
    tests,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    critical,
    active,
  } = coronaContext.countryData;
  return (
    <div>
      <div className="info">
        <div className="overview">
          <img
            src={countryInfo && countryInfo.flag}
            alt="flag"
            className="flag2"
          />{" "}
          {country} Overview
        </div>
        <div className="row ">
          <div
            style={{
              color: "#E53E3E",
              fontWeight: "700",
              padding: "20px 0",
              lineHeight: "0.4",
              textAlign: "center",
            }}
            className="col-6 col-md card-details "
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "35px",
              }}
            >
              <CountUp
                start={cases - todayCases}
                end={cases}
                separator=","
                className="figure"
              />
            </p>{" "}
            <br />
            <p className="type">Confirmed</p>
            <br />
            <p className="today">
              {todayCases !== 0 && `+ ${todayCases} New Cases`}
            </p>
          </div>
          <div
            style={{
              color: "#5AA36D",
              padding: "20px 0",
              lineHeight: "0.4",
              fontWeight: "700",
              textAlign: "center",
            }}
            className="col-6 col-md card-details "
          >
            <p style={{ fontWeight: "700", fontSize: "35px" }}>
              {" "}
              <CountUp
                start={recovered - todayRecovered}
                end={recovered}
                separator=","
                className="figure"
              />
            </p>{" "}
            <br />
            <p className="type">Recovered</p>
            <br />
            <p className="today">
              {todayRecovered !== 0 && `+ ${todayRecovered} New Recovered`}
            </p>
          </div>
          <div
            style={{
              color: "#718096",
              fontWeight: "700",
              padding: "20px 0",
              lineHeight: "0.4",
              textAlign: "center",
            }}
            className="col-6 col-md card-details "
          >
            <p style={{ fontWeight: "700", fontSize: "35px" }}>
              {" "}
              <CountUp
                start={deaths - todayDeaths}
                end={deaths}
                separator=","
                className="figure"
              />
            </p>{" "}
            <br />
            <p className="type">Deaths</p>
            <br />
            <p className="today">
              {todayDeaths !== 0 && `+ ${todayDeaths} New Deaths`}
            </p>
          </div>
          <div
            style={{
              color: "gray",
              fontWeight: "700",
              padding: "20px 0",
              lineHeight: "0.4",
              textAlign: "center",
            }}
            className="col-6 col-md card-details "
          >
            <p
              style={{
                fontWeight: "700",
                color: "#047D",
                fontSize: "35px",
              }}
            >
              <CountUp
                start={active}
                end={active}
                separator=","
                className="figure"
              />
            </p>{" "}
            <br />
            <p className="type">Active Cases </p>
            <br />
          </div>
          <div
            style={{
              color: "gray",
              fontWeight: "700",
              padding: "20px 0",
              lineHeight: "0.4",
              textAlign: "center",
            }}
            className="col-6 col-md  d-xl-block"
          >
            <p
              style={{ fontWeight: "700", color: "#E53E3E", fontSize: "35px" }}
            >
              <CountUp
                start={critical}
                end={critical}
                separator=","
                className="figure"
              />
            </p>{" "}
            <br />
            <p className="type">Critical Cases </p>
            <br />
          </div>
          <div
            style={{
              color: "gray",
              fontWeight: "700",
              padding: "20px 0",
              lineHeight: "0.4",
              textAlign: "center",
            }}
            className="col-6 col-md  d-xl-block"
          >
            <p
              style={{ fontWeight: "700", color: "#939DAD", fontSize: "35px" }}
            >
              <CountUp
                start={tests}
                end={tests}
                separator=","
                className="figure"
              />
            </p>{" "}
            <br />
            <p className="type">Tests Done</p>
            <br />
          </div>
        </div>
      </div>{" "}
      <div className="row pie-chart">
        {" "}
        <div className=" col-md-6 col-12 mb-3 mb-md-0">
          <div className="card-pie ">
            <PieChart countries={SelectedCountry} />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card-pie ">
            {" "}
            <PieChart2 countries={SelectedCountry} />
          </div>
        </div>
      </div>
      <div className="card-chart">
        {" "}
        <Charts country={SelectedCountry} />
      </div>
      <div className="state-card">
        {SelectedCountry === "Nepal" ? (
          <div>
            <NepalDistrict />
          </div>
        ) : (
          <State countries={SelectedCountry} />
        )}
      </div>
    </div>
  );
};

export default Country;
