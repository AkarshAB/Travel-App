import React, { useState } from "react";
import "./Alogin.css";
import Icon from "../../../../Images/icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ARegister from "../Register/ARegister";
import { addNormaluser } from "../../../../Store/Reducer/Reducer";
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
    dispatch(addNormaluser(Register));
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
    fetch("authlog/", {
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
      {!Register ? (
        <div className="Alogincontainer1">
          <div className="Aloginwrapper1">
            <div className="Aloginbox1">
              <div className="Aiconsection12" onClick={onchange}>
                <img src={Icon} alt="" className="icon" />
                <div className="Adesc1">VentureVista</div>
              </div>
              <div className="Amainhead1">
                Admin Power to VentureVista..Login
              </div>
              <div className="Ainputcontainer1">
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
                <button className="Abutton-login" onClick={SaveUser}>
                  Login
                </button>
              </div>
              <div className="Aregisterlink">
                If you dont have an account use{" "}
                <div
                  style={{
                    color: "white",
                    cursor: "pointer",
                    fontSize: "25px",
                    fontWeight: "800",
                  }}
                  onClick={shift}
                >
                  {" "}
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ARegister />
      )}
    </>
  );
}

export default ALogin;
