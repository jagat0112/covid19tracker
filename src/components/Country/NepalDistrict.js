import React, { useState, useEffect } from "react";
import axios from "axios";

const NepalDistrict = () => {
  const [districts, setDistricts] = useState([]);
  const [districtCases, setDistrictCases] = useState([]);
  const [districtDeaths, setDistrictDeaths] = useState([]);
  const [districtRecovered, setDistrictRecovered] = useState([]);

  useEffect(() => {
    const getDistricts = async () => {
      try {
        const { data } = await axios.get(
          `https://data.nepalcorona.info/api/v1/districts`
        );

        setDistricts(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getDistrictCases = async () => {
      try {
        const { data } = await axios.get(
          `https://data.nepalcorona.info/api/v1/covid/summary`
        );

        setDistrictCases(data.district.cases);
      } catch (error) {
        console.log(error);
      }
    };
    const getDistrictDeaths = async () => {
      try {
        const { data } = await axios.get(
          `https://data.nepalcorona.info/api/v1/covid/summary`
        );

        setDistrictDeaths(data.district.deaths);
      } catch (error) {
        console.log(error);
      }
    };
    const getDistrictRecovered = async () => {
      try {
        const { data } = await axios.get(
          `https://data.nepalcorona.info/api/v1/covid/summary`
        );

        setDistrictRecovered(data.district.recovered);
      } catch (error) {
        console.log(error);
      }
    };
    getDistricts();
    getDistrictCases();
    getDistrictDeaths();
    getDistrictRecovered();
  }, []);

  let districtWiseCases = [];

  districts.map((item) => districtWiseCases.push(item));

  districtWiseCases.map((item) =>
    districtCases.map((casee) =>
      item.id === casee.district ? (item.cases = casee.count) : null
    )
  );

  districtWiseCases.map((item) =>
    districtRecovered.map((recovered) =>
      item.id === recovered.district ? (item.recovered = recovered.count) : null
    )
  );

  districtWiseCases.map((item) =>
    districtDeaths.map((deaths) =>
      item.id === deaths.district ? (item.deaths = deaths.count) : null
    )
  );
  districtWiseCases.sort((a, b) =>
    a.cases < b.cases
      ? 1
      : a.cases === b.cases
      ? a.cases > b.cases
        ? 1
        : -1
      : -1
  );

  return (
    <div style={{ margin: "60px", textAlign: "center" }}>
      <p style={{ fontSize: "10px", textAlign: "right" }}>
        Data Source: Ministry of Health and Population, Government of Nepal.
      </p>
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
              District
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
        {districtWiseCases.map((item, id) => (
          <tbody key={id}>
            <tr>
              <td
                style={{
                  backgroundColor: "#EDF2F7",
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                {item.title_ne}
              </td>
              <td
                style={{
                  fontWeight: "600",
                  backgroundColor: "#FFF5F5",
                }}
              >
                {item.cases}
              </td>
              <td
                style={{
                  fontWeight: "600",
                  backgroundColor: "#F0FFF4",
                }}
              >
                {item.recovered}
              </td>
              <td
                style={{
                  fontWeight: "600",
                  backgroundColor: "#EDF2F7",
                }}
              >
                {item.deaths ? item.deaths : 0}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default NepalDistrict;
