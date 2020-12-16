import React, { Fragment } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Format = ({
  country: {
    country,
    countryInfo,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    critical,
    active,
  },
}) => {
  return (
    <div className="row my-4">
      <div className="col-12 col-md-3 col-lg-4  text-center ">
        {" "}
        <img src={countryInfo.flag} alt="" className="flag" />
      </div>
      <div className="col-12 col-md-9 col-lg-8 text-justify">
        <h1 className="country">
          {country}{" "}
          <Link to={`/country/${country}`} className="btn btn-info btn-sm">
            More
          </Link>
        </h1>{" "}
        <Fragment>
          {" "}
          <div className="row">
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
                {" "}
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
                {todayCases !== 0 &&
                  `+ ${todayCases.toLocaleString({
                    maximumFractionDigits: 2,
                  })} New Cases`}
              </p>
            </div>
            <div
              style={{
                color: "#38A169",
                padding: "20px 0",
                lineHeight: "0.4",
                fontWeight: "700",
                textAlign: "center",
                background: "#EDF2F7",
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
                {todayRecovered !== 0 &&
                  `+ ${todayRecovered.toLocaleString({
                    maximumFractionDigits: 2,
                  })} New Recovered`}
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
                {todayDeaths !== 0 &&
                  `+ ${todayDeaths.toLocaleString({
                    maximumFractionDigits: 2,
                  })} New Deaths`}
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
                  color: "#00247D",
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
              className="col-6 col-md d-none d-xl-block"
            >
              <p style={{ fontWeight: "700", color: "red", fontSize: "35px" }}>
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
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default Format;
