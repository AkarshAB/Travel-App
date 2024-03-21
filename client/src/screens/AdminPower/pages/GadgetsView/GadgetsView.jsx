import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navebar/Navbar";
import "./GadgetsView.css";
import Map from "../../Components/map/Map";
import { Link } from "react-router-dom";
import Dp from "../../Images/personaldp.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Hotel from "../../Images/hotel1.jpeg";
import Church from "../../Images/church1.jpg";
import Bigb from "../../Images/bigb.jpg";
import Athirappilly from "../../Images/athirappalli.jpeg";
import Wonderla from "../../Images/wonderlaa.jpeg";
import App from "../../App";
import { useNavigate } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import ALogin from "../Authentication/Admin/Login/ALogin";
import Wheather from "../wheather/Wheather";
import Safety from "../Safety/Safety";
import Emergency from "../Emergency/Emergency";
import Currency from "../Currencyconverter/Currency";
import Feedback from "../Feedback/Feedback";
import Convert from "../Currencyconvert/Convert";
import { useDispatch } from "react-redux";
import axios from "axios";
function GadgetsView() {
  const [Changer, setChanger] = useState({});
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  const [CurrentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      setCurrentLocation({ longitude, latitude });
      return CurrentLocation;
    });
  }, []);

  const { latitude, longitude } = CurrentLocation;

  console.log(CurrentLocation);
  const handleclick1 = () => {
    setChanger({
      ...Changer,
      ["value"]: "1",
    });
  };
  const handleclick2 = () => {
    setChanger("");
    setChanger({
      ...Changer,
      ["value"]: "2",
    });
  };
  const handleclick3 = () => {
    setChanger("");
    setChanger({
      ...Changer,
      ["value"]: "3",
    });
  };
  const handleclick4 = () => {
    setChanger("");
    setChanger({
      ...Changer,
      ["value"]: "4",
    });
  };
  const handleclick5 = () => {
    setChanger("");
    setChanger({
      ...Changer,
      ["value"]: "5",
    });
  };
  const handleclick6 = () => {
    setChanger("");
    navigate("/gadgets");
  };
  const handleclick7 = () => {
    setChanger("");
    setChanger({
      ...Changer,
      ["value"]: "7",
    });
  };
  const handleclick8 = () => {
    setChanger("");
    setChanger({
      ...Changer,
      ["value"]: "8",
    });
  };

  useEffect(() => {
    axios.get("travel-package-view/").then((res) => {
      if (res.data) {
        console.log(res.data);
        setData(res.data);
      } else {
        alert("Packages are not readable");
      }
    });
  }, []);

  return (
    <div className="gadcontainer">
      <div className="gadwerapper">
        <div className="Gnavcontainer">
          <Navbar />
        </div>
        <div className="Gmainbox">
          <aside className="gsub1">
            <div className="sidebarmain">
              <div className="sidbarwrapper">
                <div className="userSection">
                  <div className="dp">
                    <img src={Dp} />
                  </div>
                  <div>
                    <div className="username">Tibin sunny</div>
                    <div className="currntlocation">
                      lat:{CurrentLocation.latitude},lng:{longitude}
                    </div>
                    {/* onClick={handleclick({value:"1",name:"map"})}onClick={handleclick({value:"2",name:"Admin"})} */}
                  </div>
                </div>
                <div className="listcontainer">
                  <div className="list1">
                    <div
                      onClick={handleclick6}
                      className={
                        Changer.value === "" ? "activate" : "listitems"
                      }
                    >
                      🗺️Map services
                    </div>
                    <div
                      onClick={handleclick1}
                      className={
                        Changer.value === "1" ? "activate" : "listitems"
                      }
                    >
                      👮adminLogin
                    </div>
                    <div
                      onClick={handleclick2}
                      className={
                        Changer.value === "2" ? "activate" : "listitems"
                      }
                    >
                      💴Packages
                    </div>
                    <div
                      onClick={handleclick3}
                      className={
                        Changer.value === "3" ? "activate" : "listitems"
                      }
                    >
                      🌦️Wheather
                    </div>
                    <div
                      onClick={handleclick8}
                      className={
                        Changer.value === "8" ? "activate" : "listitems"
                      }
                    >
                      💵converter
                    </div>
                    <div
                      onClick={handleclick4}
                      className={
                        Changer.value === "4" ? "activate" : "listitems"
                      }
                    >
                      🦺Safety
                    </div>
                    <div
                      onClick={handleclick5}
                      className={
                        Changer.value === "5" ? "activate" : "listitems"
                      }
                    >
                      🚒Emergency
                    </div>
                    <div
                      onClick={handleclick7}
                      className={
                        Changer.value === "7" ? "activate" : "listitems"
                      }
                    >
                      📝Feedbacks
                    </div>
                  </div>
                  <div className="logout">Logout</div>
                </div>
              </div>
            </div>
          </aside>
          <div className="gsub2">
            {Changer.value === "1" ? (
              <ALogin />
            ) : Changer.value === "2" ? (
              <Currency />
            ) : Changer.value === "3" ? (
              <Wheather />
            ) : Changer.value === "4" ? (
              <Safety />
            ) : Changer.value === "5" ? (
              <Emergency />
            ) : Changer.value === "7" ? (
              <Feedback />
            ) : Changer.value === "8" ? (
              <Convert />
            ) : (
              <>
                <div className="mapsec">
                  <Map />
                </div>
                <div className="packagemainhead">
                  THE AVAILABLE PACKAGES FOR YOUR SEARCH...
                </div>
                <div className="gsub3">
                  {Data.length === 0 ? (
                    <div>Loading....</div>
                  ) : (
                    Data.map((item) => (
                      <div className="packagecover" key={item.id}>
                        <div className="packgewrapper">
                          <div className="packageimagesection">
                            <img src={item.photos} alt="" />
                          </div>
                          <div className="packagebody">
                            <div className="packageinfo">
                              <div className="packageinfolist">
                                Location: {item.title}
                              </div>
                              <div className="packageinfolist">
                                Duration: {item.duration}
                              </div>
                              <div className="packageinfolist">
                                Description: {item.description}
                              </div>
                              <div className="packageinfolist">
                                RATINGS⭐⭐⭐⭐⭐
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GadgetsView;
