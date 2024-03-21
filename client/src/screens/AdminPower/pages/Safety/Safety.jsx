import React, { useState, useEffect } from "react";
import Icon from "../../Images/icon.png";
import "./safety.css";

function Safety() {
  const [Data, setData] = useState({ done: "" });

  const [Codelist, setCodelist] = useState({ code: "" });
  const [Advisory, setAdvisory] = useState({});
  const [Single, setSingle] = useState({});
  const [Toggle, setToggle] = useState({});
  useEffect(() => {
    fetch("get-safety-info/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.country_safety_info.data);
        setData(data.country_safety_info.data);
      });
    coutryCodes();
  }, []);

  const coutryCodes = async () => {
    fetch("get-country-codes/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          console.log([data.country_codes]);
          setCodelist([data.country_codes]);
        } catch {
          alert("the data fetchig error");
        }
      });
  };

  const handlechange = (e) => {
    setAdvisory({
      ...Advisory,
      ["token"]: e.target.value,
    });
  };

  const submit = () => {
    setToggle({ tog: "1" });
    console.log();
    console.log(Advisory.token);
    fetch(`get-safety-info/?country_code=${Advisory.token}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSingle(data.country_safety_info.data);
        console.log(Single);
      });
  };
  return (
    <div className="safetycover">
      <div className="smainhead">
        <img src={Icon} alt="" />
        Global security
      </div>
      <div className="swrapper">
        <div className="searchbarcontainer">
          <input type="text" placeholder="Serach your country.." />
          <label for="countryselected">select your country code</label>
          <select
            name="countryselected"
            id="countryselected"
            className="countryselect"
            onChange={handlechange}
          >
            {Codelist.code == "" ? (
              <div>Loading......</div>
            ) : (
              Object.keys(Codelist[0]).map((country) => (
                <option key={Codelist[country]} value={Codelist[0][country]}>
                  <div className="s1"> {country}</div>
                  <div className="s2" value={Codelist[0][country]}>
                    ( {Codelist[0][country]})
                  </div>
                </option>
              ))
            )}
          </select>
          <div className="searchicon" onClick={submit}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <>
          {Toggle.tog === "1" ? (
            <div className="smainbox">
              {Data.done === "" ? (
                <div>Loading...</div>
              ) : (
                Object.keys(Single).map((country) => (
                  <div className="ecard">
                    <div
                      className={
                        // country[1].advisory.score >= 3
                        //   ? "danger"
                        //   : country[1].advisory.score <= 3
                        //   ? "safe"
                        //   : "ecard"
                        ""
                      }
                    >
                      <div className="message">{country[0]}</div>
                      <div className="message">{country.name}</div>
                      <div className="message">{country.continent}</div>
                      <div className="message">
                        score:{country.advisory.score}
                      </div>
                      <div className="message">
                        message:{country.advisory.message}
                      </div>
                      <div className="message">
                        information updated:{country[1].advisory.updated}
                      </div>
                      <div className="message">
                        visit for more information:{country[1].advisory.source}
                      </div>
                      <div className="message">
                        risk sources active at:{country[1].advisory.message}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="smainbox">
              {Data.done === "" ? (
                <div
                  style={{
                    color: "white",
                    fontSize: "30px",
                    display: "flex",
                    width: "100%",
                    height: "3vh",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Loading...
                </div>
              ) : (
                Object.entries(Data).map((country) => (
                  <div className="ecard">
                    <div
                      className={
                        country[1].advisory.score >= 3
                          ? "danger"
                          : country[1].advisory.score <= 3
                          ? "safe"
                          : "ecard"
                      }
                    >
                      <div className="message"> iso code : {country[0]}</div>
                      <div className="message">Name :{country[1].name}</div>
                      <div className="message">
                        continent : {country[1].continent}
                      </div>
                      <div className="message">
                        score : {country[1].advisory.score}
                      </div>
                      <div className="message">
                        message : {country[1].advisory.message}
                      </div>
                      <div className="message">
                        information updated on: {country[1].advisory.updated}
                      </div>
                      <div className="message">
                        visit for more information :{" "}
                        {country[1].advisory.source}
                      </div>
                      <div className="message">
                        Causion : {country[1].advisory.message}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default Safety;
