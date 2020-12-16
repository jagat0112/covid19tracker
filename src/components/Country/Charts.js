import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const ApexChart = ({ country }) => {
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let Cases = [];
      let Deaths = [];
      let Recovered = [];
      let Dates = [];
      try {
        const { data } = await axios.get(
          `https://corona.lmao.ninja/v3/covid-19/historical/${country}?lastdays=30`
        );
        Object.values(data.timeline.cases).map((num) => {
          return Cases.push(parseInt(num));
        });
        const num = Cases.slice(1).map((v, i) => v - Cases[i]);

        setCases(num);

        Object.values(data.timeline.deaths).map((num) => {
          return Deaths.push(parseInt(num));
        });
        const num2 = Deaths.slice(1).map((v, i) => v - Deaths[i]);

        setDeaths(num2);

        Object.values(data.timeline.recovered).map((num) => {
          return Recovered.push(parseInt(num));
        });
        const num1 = Recovered.slice(1).map((v, i) => v - Recovered[i]);
        setRecovered(num1);

        Object.keys(data.timeline.recovered).forEach(function (key) {
          Dates.push(key);
        });
        const num3 = Dates.slice(2);

        setDates(num3);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  const series = [
    {
      name: "Cases",
      data: cases,
    },
    {
      name: "Recovered",
      data: recovered,
    },
    {
      name: "Deaths",
      data: deaths,
    },
  ];
  const options = {
    title: {
      text: "Daily Chart of last 30 Days ",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    fill: {
      colors: undefined,
      opacity: 0.1,
      type: "solid",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.5,
        stops: [0, 50, 100],
        colorStops: [],
      },

      image: {
        src: [],
        width: undefined,
        height: undefined,
      },
      pattern: {
        style: "verticalLines",
        width: 6,
        height: 6,
        strokeWidth: 5,
      },
    },
    grid: {
      show: false,
    },
    chart: {
      height: 550,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
    yaxis: {
      show: true,
      opposite: true,
    },
    colors: ["#67BBFC", "#67EEC0", "#FECF75"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350,
            height: 300,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default ApexChart;
