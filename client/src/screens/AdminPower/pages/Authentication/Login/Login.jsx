import React, { useState } from "react";
import "./login.css";
import Icon from "../../../Images/icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Login() {
  // state creation
  const [User, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const StoreUser = useSelector((state) => state.user.normalUser);
  const onchange = () => {
    navigate("/");
  };
  const valueFill = (e) => {
    e.preventDefault();
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
    console.log(User);
  };
  const SaveUser = () => {
    const { username, password } = User;
    fetch("custom-login/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert(data.error);
        }
        alert(data.message);
        console.log(data);
        navigate("/gadgets");
        _;
      });
  };
  return (
    <div className="logincontainer1">
      <div className="loginwrapper1">
        <div className="loginbox1">
          <div className="iconsection12" onClick={onchange}>
            <img src={Icon} alt="" className="icon" />
            <div className="desc1">VentureVista</div>
          </div>
          <div className="mainhead1">Login to VentureVista</div>
          <div className="inputcontainer1">
            <input
              type="text"
              placeholder="enter username..."
              onChange={valueFill}
              name="username"
            />
            <input
              type="text"
              onChange={valueFill}
              name="password"
              placeholder="enter password..."
            />
            <br />
            <button className="button-login" onClick={SaveUser}>
              Login
            </button>
          </div>
          <div className="registerlink">
            If you dont have an account use{" "}
            <Link
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "25px",
                fontWeight: "800",
              }}
              to={"/registerpage"}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
