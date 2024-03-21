import React, { useState } from "react";
import "./ARegister.css";
import Icon from "../../../../Images/icon.png";
import { useNavigate } from "react-router-dom";
import addUser from "../../../../Store/Reducer/Reducer";
import { useDispatch } from "react-redux";
function Login() {
  const navigate = useNavigate();
  const onchange = () => {
    navigate("/");
  };
  const [Formdata, setFormdata] = useState({});
  const [Login, setLogin] = useState();
  const dispatch = useDispatch();
  const Dataset = (e) => {
    e.preventDefault();
    setFormdata({
      ...Formdata,
      [e.target.name]: e.target.value,
    });
    console.log(Formdata);
  };
  const shift = () => {
    setRegister({
      ...Login,
      ["value"]: "",
    });
    dispatch(addNormaluser("value", Login.value));
  };

  const submitData = () => {
    const { username, first_name, last_name, email, password } = Formdata;

    fetch("authuser/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        first_name,
        last_name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        Object.keys(data).map((item) => {
          alert(data[item]);
        });
      });
  };
  return (
    <div className="Rlogincontainer">
      <div className="Rloginwrapper">
        <div className="Rloginbox">
          <div className="Riconsection1" onClick={onchange}>
            <img src={Icon} alt="" className="icon" />
            <div className="Rdesc">VentureVista</div>
          </div>
          <div className="Rmainhead">Login to VentureVista</div>
          <div className="Rinputcontainer">
            <input
              type="text"
              placeholder="enter username..."
              onChange={Dataset}
              name="username"
            />
            <input
              type="text"
              placeholder="email..."
              onChange={Dataset}
              name="email"
            />
            <br />
            <input
              type="text"
              placeholder="enter firstname..."
              onChange={Dataset}
              name="first_name"
            />
            <br />
            <input
              type="text"
              name="last_name"
              placeholder="enter lastname..."
              onChange={Dataset}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="enter password..."
              onChange={Dataset}
            />
            <br />
            <button className="Rbutton-login" onClick={submitData}>
              Register
            </button>
          </div>
          <div className="RLoginlink">
            If you have an account use
            <div
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "25px",
                fontWeight: "800",
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
