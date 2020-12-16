import React from "react";
import fever from "../../Images/light_fever.gif";
import cough from "../../Images/light_cough.gif";
import tiredness from "../../Images/light_tiredness.gif";

const Symptoms = () => {
  return (
    <div className="p-2 symptoms-all">
      <h1>Symptoms</h1>
      <div className="symptoms-gif">
        {" "}
        <img src={fever} alt="" style={{ width: "100px" }} />
        <img src={cough} alt="" style={{ width: "100px" }} />
        <img src={tiredness} alt="" style={{ width: "100px" }} />
      </div>
      <div className="symptoms-text">
        COVID-19 affects different people in different ways. Most infected
        people will develop mild to moderate illness and recover without
        hospitalization.
        <br />
        <br />
        Most common symptoms:
        <ul>
          <li>fever</li>
          <li>dry cough</li>
          <li>tiredness</li>
        </ul>
        Less common symptoms:
        <ul>
          <li>sore throat</li>
          <li>diarrhoea</li>
          <li> conjunctivitis</li>
          <li>headache</li>
          <li>loss of taste or smell</li>
          <li> a rash on skin, or discolouration of fingers or toes</li>
        </ul>
        Serious symptoms:
        <ul>
          <li>difficulty breathing or shortness of breath</li>
          <li>chest pain or pressure</li>
          <li>loss of speech or movement</li>
        </ul>
        Seek immediate medical attention if you have serious symptoms. Always
        call before visiting your doctor or health facility. People with mild
        symptoms who are otherwise healthy should manage their symptoms at home.
        On average it takes 5–6 days from when someone is infected with the
        virus for symptoms to show, however it can take up to 14 days.
        <br />
        Source: <a href="who.int">who.int</a>
      </div>
    </div>
  );
};

export default Symptoms;
