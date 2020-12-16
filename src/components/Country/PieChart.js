import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const PieChart = ({ countries }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let datas = [];
      try {
        const { data } = await axios.get(
          `https://corona.lmao.ninja/v3/covid-19/countries/${countries}`
        );
        datas.push(parseInt(data.deaths));
        datas.push(parseInt(data.cases));
        setCountry(datas);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const state = {
    series: [((country[0] / country[1]) * 100).toFixed(1)],
    options: {
      colors: ["#E53E3E", "#FF9800"],

      chart: {
        height: 250,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
          track: {
            background: "#CCCCCC",
          },
        },
      },
      labels: ["Death Rate"],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={250}
      />
    </div>
  );
};

export default PieChart;
