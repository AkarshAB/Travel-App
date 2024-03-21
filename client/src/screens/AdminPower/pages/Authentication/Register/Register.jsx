import React, { useState } from "react";
import "./Register.css";
import Icon from "../../../Images/icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const onchange = () => {
    navigate("/");
  };
  const [Formdata, setFormdata] = useState({});
  const Dataset = (e) => {
    e.preventDefault();
    setFormdata({
      ...Formdata,
      [e.target.name]: e.target.value,
    });
    console.log(Formdata);
  };
  const submitData = () => {
    const {
      username,
      firstname,
      lastname,
      address,
      zipcode,
      Passport,
      Id_proof,
      phone_no,
      email,
      password,
    } = Formdata;
    console.log(Passport);
    fetch("users/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        firstname,
        lastname,
        address,
        zipcode,
        Passport,
        Id_proof,
        phone_no,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          alert("Registration failed ..check your connection");
        }
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          navigate("/loginpage");
        }
      });
  };
  return (
    <div className="logincontainer">
      <div className="loginwrapper">
        <div className="loginbox">
          <div className="iconsection1" onClick={onchange}>
            <img src={Icon} alt="" className="icon" />
            <div className="desc">VentureVista</div>
          </div>
          <div className="mainhead">Register to VentureVista</div>
          <div className="inputcontainer">
            <input
              type="text"
              placeholder="enter username..."
              onChange={Dataset}
              name="username"
            />
            <input
              type="text"
              placeholder="enter first name..."
              onChange={Dataset}
              name="firstname"
            />
            <br />
            <input
              type="text"
              placeholder="enter lastname..."
              onChange={Dataset}
              name="lastname"
            />
            <br />
            <input
              type="textbox"
              name="address"
              placeholder="enter address..."
              onChange={Dataset}
            />
            <br />
            <input
              type="number"
              name="zipcode"
              onChange={Dataset}
              placeholder="enter Zipcode..."
            />
            <br />
            <div className="filefields">
              Add passport...
              <input
                type="file"
                name="Passport"
                placeholder="Add passport..."
                onChange={Dataset}
              />
              <br />
            </div>
            <div className="filefields">
              Add Id proof...
              <input
                type="file"
                name="Id_proof"
                placeholder="Add Id proof..."
                onChange={Dataset}
              />
              <br />
            </div>
            <input
              type="number"
              placeholder="enter phonenumber..."
              name="phone_no"
              onChange={Dataset}
            />
            <br />
            <input
              type="text"
              name="email"
              placeholder="enter emailId..."
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
            <button className="button-login" onClick={submitData}>
              Register
            </button>
          </div>
          <div className="registerlink">
            If you have an account use{" "}
            <Link
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "25px",
                fontWeight: "800",
              }}
              to={"/loginpage"}
            >
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
