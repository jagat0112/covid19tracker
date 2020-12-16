import React, { useContext } from "react";
import CountUp from "react-countup";
import fever from "../../Images/fever.png";
import death from "../../Images/death.png";
import loading from "../../Images/loading.gif";
import CoronaContext from "../Context/CoronaContext/coronaContext";

const WorldStats = () => {
  const coronaContext = useContext(CoronaContext);

  const { cases, deaths, updated } = coronaContext.globalData;
  const date = new Date(parseInt(updated));
  const lastUpdated = date.toString();

  if (!cases) {
    return (
      <div>
        <img
          src={loading}
          alt=""
          className="loading"
          style={{ padding: "50px" }}
        />
      </div>
    );
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <h1 className="title">
        COVID 19 <br className="d-md-none" /> Global Cases
      </h1>
      <p style={{ fontSize: "10px" }}>Updated on: {lastUpdated.slice(3)}</p>
      <div>
        <h2 style={{ fontSize: "40px" }}>
          <img src={fever} alt="" className="icon-img" />{" "}
          <CountUp
            start={0}
            end={cases}
            duration={2}
            separator=","
            className="global-cases"
          />
        </h2>
      </div>
      <div>
        <h2 style={{ fontSize: "40px" }}>
          <img src={death} alt="" className="icon-img " />{" "}
          <CountUp
            start={0}
            end={deaths}
            duration={2}
            separator=","
            className="global-death"
          />
        </h2>
      </div>
    </div>
  );
};

export default WorldStats;
