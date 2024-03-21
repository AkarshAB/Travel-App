import React, { useEffect, useState } from "react";
import "./convert.css";
import ChangingIcon from "../../Images/changing.png";
import axios from "axios";
function Convert() {
  const [Codes, setCodes] = useState({});
  const [FormData, setFormData] = useState({});
  const [convertedValue, setConvertedValue] = useState({});
  useEffect(() => {
    fetch("convert-currency/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCodes(data.currency_codes);
        console.log(Codes);
      });
  }, []);

  const handlesubmit = () => {
    const { toCountry, fromCountry, value } = FormData;
    axios
      .post("convert-currency/", {
        to_currency: toCountry,
        from_currency: fromCountry,
        amount: value,
      })
      .then((res) => {
        // Object.keys(res).map((item) => {
        //   console.log();
        // });
        setConvertedValue(res.data);

        console.log(convertedValue);
      });
  };
  const Datafeeding = (e) => {
    e.preventDefault();
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
    console.log(FormData);
  };

  return (
    <div className="crcontainer">
      <div className="crwrapper">
        <div className="crmainbox">
          <div className="crheadmain">Currency converter</div>
          <div className="crdevision">
            <div className="sub11">
              <select
                id="w1"
                onChange={Datafeeding}
                name="fromCountry"
                className="from"
              >
                <option defaultValue={1}>select to country</option>
                {Object.keys(Codes).map((items) => {
                  return (
                    <>
                      <option
                        key={Codes[items]}
                        value={items}
                        className="clistitems"
                      >
                        {Codes[items]}
                      </option>
                    </>
                  );
                })}
              </select>
              <div className="changingicon">
                <img src={ChangingIcon} alt="" />
              </div>
              <select
                id="w1"
                onChange={Datafeeding}
                value={FormData}
                className="from"
                name="toCountry"
              >
                {Object.keys(Codes).map((items) => {
                  <option defaultValue={1}></option>;
                  return (
                    <>
                      <option
                        key={Codes[items]}
                        value={items}
                        className="clistitems"
                      >
                        {Codes[items]}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="inputfield">
              <input
                type="text"
                onChange={Datafeeding}
                name="value"
                placeholder="enter your amount"
              />
            </div>
            <button onClick={handlesubmit} className="csubmit">
              Convert
            </button>
            <div className="sub12">
              <div className="resultbox">
                {Object.keys(convertedValue).map((item) => {
                  // console.log(convertedValue[item]);
                  return (
                    <div className="resultmain" key={item}>
                      {convertedValue[item]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Convert;