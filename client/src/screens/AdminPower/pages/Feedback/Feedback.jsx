import React, { useState } from "react";
import "./feedback.css";
import Icon from "../../Images/icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function ALogin() {
  // state creation
  const [User, setUser] = useState({});
  const [Register, setRegister] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const StoreUser = useSelector((state) => state.user.normalUser);
  const onchange = () => {
    navigate("/");
  };
  const shift = () => {
    setRegister({
      ...Register,
      ["value"]: "shifted",
    });
    console.log(Register);
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
        console.log(data);
      });
  };
  return (
    <>
      <div className="Flogincontainer1">
        <div className="Floginwrapper1">
          <div className="Floginbox1">
            <div className="Aiconsection12" onClick={onchange}>
              <img src={Icon} alt="" className="icon" />
              <div className="Fdesc1">VentureVista</div>
            </div>
            <div className="Fmainhead1">Admin Power to VentureVista..Login</div>
            <div className="Finputcontainer1">
              <input
                type="text"
                placeholder="enter username..."
                onChange={valueFill}
                name="username"
              />
              <input
                type="text"
                onChange={valueFill}
                name="text"
                placeholder="enter title..."
              />
              <br />
              <input
                type="text"
                onChange={valueFill}
                name="text"
                placeholder="enter message..."
              />
              <br />
              <input
                type="text"
                onChange={valueFill}
                name="text"
                placeholder="choose the particular date..."
              />
              <br />
              <button className="Fbutton-login" onClick={SaveUser}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ALogin;
