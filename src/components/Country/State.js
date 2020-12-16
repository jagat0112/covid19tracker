import React, { useEffect, useState } from "react";
import axios from "axios";

const State = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getProvinceData = async () => {
      try {
        const { data } = await axios.get(
          `https://disease.sh/v3/covid-19/jhucsse`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProvinceData();
    // eslint-disable-next-line
  }, []);

  const arr = Object.entries(data);

  let filtered = "";
  if (props.countries === "uk") {
    filtered = arr.filter((item) => item[1].country === "United Kingdom");
  } else if (props.countries === "USA") {
    filtered = arr.filter((item) => item[1].country.toLowerCase() === "us");
  } else {
    filtered = arr.filter(
      (item) => item[1].country.toLowerCase() === props.countries.toLowerCase()
    );
  }

  const pro = filtered.map((i) => i[1].province);

  if (pro.length === 1) {
    return (
      <p style={{ fontSize: "20px", color: "#666666" }}>
        No State information available for{" "}
        {props.countries[0].toUpperCase() + props.countries.slice(1)}.
      </p>
    );
  } else {
    return (
      <div style={{ margin: "60px", textAlign: "center" }}>
        <table
          className="table table-hover"
          style={{ fontSize: "20px", color: "#666666" }}
        >
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  fontWeight: "700",
                  backgroundColor: "#EDF2F7",
                  textAlign: "left",
                }}
              >
                State
              </th>
              <th
                scope="col"
                style={{ fontWeight: "700", backgroundColor: "#FED7D7" }}
              >
                Cases
              </th>
              <th
                scope="col"
                style={{ fontWeight: "700", backgroundColor: "#C6F6D5" }}
              >
                Recovered
              </th>
              <th
                scope="col"
                style={{ fontWeight: "700", backgroundColor: "#E2E8F0" }}
              >
                Deaths
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(
              (item, id) =>
                item[1].province !== "Unknown" &&
                item[1].province !== "Recovered" && (
                  <tr key={id}>
                    <td
                      style={{
                        backgroundColor: "#EDF2F7",
                        fontWeight: "700",
                        textAlign: "left",
                      }}
                    >
                      {item[1].province}
                    </td>
                    <td
                      style={{ fontWeight: "600", backgroundColor: "#FFF5F5" }}
                    >
                      {item[1].stats.confirmed.toLocaleString({
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td
                      style={{ fontWeight: "600", backgroundColor: "#F0FFF4" }}
                    >
                      {item[1].stats.recovered !== 0
                        ? item[1].stats.recovered.toLocaleString({
                            maximumFractionDigits: 2,
                          })
                        : null}
                    </td>
                    <td
                      style={{ fontWeight: "600", backgroundColor: "#EDF2F7" }}
                    >
                      {item[1].stats.deaths.toLocaleString({
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                )
            )}{" "}
          </tbody>
        </table>
      </div>
    );
  }
};

export default State;
