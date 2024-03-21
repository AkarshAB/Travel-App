import React, { useState, useEffect } from "react";
import "./welcome.css";
import Navbar from "../../Components/Navebar/Navbar";
import Searchbox from "../../Components/searchbox/Searchbox";
import axios from "axios";
import Footer from "../../Components/footer/Footer";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
const Welcome = () => {
  const [Carddetails, setCarddetails] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const onchange = () => {
    navigate("/gadgets");
  };

  useEffect(() => {
    console.log("entered");
    axios.get("submit-feedback/").then((result) => {
      if (result.data) {
        setCarddetails(result.data);
        console.log(Carddetails);
      } else {
        alert("dont know why its taking too much time...an error occured");
      }
    });
  }, [params]);
  return (
    <div className="wcontainer">
      <div className="wrapper">
        <div className="wnavbarcontainer">
          <Navbar />
        </div>
        <div className="herosection">
          <div className="herowords">
            "travelling-makes you speechless and turns you into a story teller"
          </div>
          <button onClick={onchange} className="startbutton">
            Get started<i class="fa-solid fa-2x fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="searchcontainer">
        <Searchbox />
      </div>
      <div className="gadgetsview">
        <div className="gadgetshead">Valuable comments about us</div>
        <div className="gadegetsleftside">
          <div className="cardsec">
            {Object.keys(Carddetails).map((details) => {
              console.log(details);
              return (
                <div className="cardcontainer" key={details}>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img
                        src={Carddetails[details].image1}
                        alt="images crashed"
                      />
                      <img
                        src={Carddetails[details].image2}
                        alt="image crashed"
                      />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="cardimg">
                      <img src={Carddetails[details].image1} alt="" />
                      <img src={Carddetails[details].image2} alt="" />
                    </div>
                    <div className="carddisc">
                      <div className="username">tibin sunny</div>
                      <div className="comments">
                        yha that awsome i cannt forget those dayas that venture
                        vista provide for us ...thanks to you guyss
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
