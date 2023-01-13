import React, { useState } from "react";
import SolidLine from "../images/Solid_lines.png";
import WobotLogo from "../images/wobot.png";

export default function Form() {
  const [companyName, setCompanyName] = useState("");
  const [industryValue, setIndustryValue] = useState("");
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(true);
  const [tab4, setTab4] = useState(false);
  const [tab5, setTab5] = useState(false);
  const [sizeValue, setSizeValue] = useState("51-200");
  const CompanySize1 = () => {
    setSizeValue("1-2");
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
  };
  const CompanySize2 = () => {
    setSizeValue("21-50");
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
    setTab5(false);
  };
  const CompanySize3 = () => {
    setSizeValue("51-200");
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
    setTab5(false);
  };
  const CompanySize4 = () => {
    setSizeValue("251-500");
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
    setTab5(false);
  };
  const CompanySize5 = () => {
    setSizeValue("500+");
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(true);
  };
  const FormSubmit = () => {
    if (companyName.length <= 0) {
      alert("please add Company name");
      return;
    }
    if (!industryValue && industryValue.length <= 0) {
      alert("please add industry value");
      return;
    }
    let data =
      "CompanyName" +
      "=" +
      companyName +
      " ," +
      "IndustryName" +
      "=" +
      industryValue +
      ", " +
      "SizeValue" +
      "=" +
      sizeValue;
    alert(data);
  };
  console.log(companyName, industryValue, sizeValue, "check");

  return (
    <div>
      <div className="form-main-logo">
        <img src={WobotLogo} alt="wobot" />
      </div>

      <div className="form-main-container">
        <div className="form-group">
          <div className="form-box">
            <div style={{ textAlign: "center" }}>
              <img src={SolidLine} alt="solid line" className="form-image" />
            </div>
            <div className="form-heading">It's a delight to have you onboard</div>
            <div className="form-desc">
              Help us know you better.
              <br /> (This is how we optimize Wobot as per your business needs)
            </div>
            <div className="form-input-box">
              <div className="form-input-title">Company Name</div>
              <input
                className="form-input"
                type="text"
                placeholder="e.g. Example Inc"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="form-input-box">
              <div className="form-input-title">Industry</div>
              <select className="form-input1" onChange={(e) => setIndustryValue(e.target.value)}>
                <option className="select-options" selected disabled>
                  Options
                </option>
                <option className="select-options" value="Industry1">
                  Industry1
                </option>
                <option className="select-options" value="Industry2">
                  Industry2
                </option>
                <option className="select-options" value="Industry3">
                  Industry3
                </option>
                <option className="select-options" value="Industry4">
                  Industry4
                </option>
              </select>
            </div>
            <div className="form-input-box">
              <div>Company Size</div>
              <div className="company-size-option">
                <div className={tab1 ? "company-active" : "company-size"} onClick={CompanySize1}>
                  1-2
                </div>
                <div className={tab2 ? "company-active" : "company-size"} onClick={CompanySize2}>
                  21-50
                </div>
                <div className={tab3 ? "company-active" : "company-size"} onClick={CompanySize3}>
                  51-200
                </div>
                <div className={tab4 ? "company-active" : "company-size"} onClick={CompanySize4}>
                  201-500
                </div>
                <div className={tab5 ? "company-active" : "company-size"} onClick={CompanySize5}>
                  500+
                </div>
              </div>
            </div>
            <div className="button-group">
              <button className="form-button" onClick={FormSubmit}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
