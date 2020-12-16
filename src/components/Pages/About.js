import React from "react";

const About = () => {
  return (
    <div className="container  about">
      <h2>About</h2>
      <div className="p-3">
        <p className="p">
          This site is created by <strong>Jagat Pradhan</strong>. A web
          development learner.
        </p>
      </div>
      <div className="p-3">
        <h3 className="h3">How to connect?</h3>
        <p className="p">
          You can connect me via linkedIn{" "}
          <a
            href="https://www.linkedin.com/in/jagat-pradhan-194a44145/"
            className="linked"
          >
            here
          </a>
          . <br />
          or
          <br />
          <i className="fas fa-envelope"></i> jagat.pradhan0112@gmail.com
        </p>
      </div>
      <div className="p-3">
        <h3 className="h3">What is the source of data?</h3>
        <p className="p">
          The source of data is Johns Hopkins Coronavirus Resource Center.
        </p>
      </div>
    </div>
  );
};

export default About;
