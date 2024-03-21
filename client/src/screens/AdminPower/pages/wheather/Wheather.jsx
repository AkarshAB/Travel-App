import React, { useState } from "react";
import "./wheather.css";
function Wheather() {
  const [Place, setPlace] = useState({});
  const [Details, setDetails] = useState({});
  const [Individuals, setIndividual] = useState({});
  const [Individuals2, setIndividual2] = useState({});
  const submit = () => {
    console.log(Place);
    fetch(`weather/${Place}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.weather){
          console.log(data);
        setDetails(data);
        }else{
          alert("Give a valid place details")
        }
        
        {
          Object.keys(Details).map(() => {
            setIndividual(Details.weather);
            setIndividual2(Details.necessary_items);
          });
        }
      });
  };

  return (
    <div className="wcontainer">
      <div className="wcover">
        <div className="mainboxw">
          <div className="wfirstbox">
            <input
              placeholder="enter youre place name...."
              onChange={(e) => setPlace(e.target.value)}
            />
            <button onClick={submit}>Search</button>
            <div className="secondbox">
              {
                Details?<div div key={Details.weather}>
                <div className="wcity">City name : {Individuals.city}</div>
                <div className="wcity">
                  description : {Individuals.description}
                </div>
                <div className="wcity">Humidity : {Individuals.humidity}</div>
                <div className="wcity">
                  temperature : {Individuals.temperature}
                </div>
                <div className="wcity">
                  important thinsg to carrie :
                  {Object.values(Individuals2).map((items) => {
                    return <div> {items}</div>;
                  })}
                </div>
              </div>:""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheather;
