import React from "react";
import "./CustomFooter.scss";
import { Divider, Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import creditimage from "../../assets/images/credits.png";
import pixelnation from "../../assets/images/pixel_nation.png";
const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="footerLayout">
      <div className="abc">
        <div style={{ width: "35%" }}>
          <div>
            <img src={pixelnation} alt="Pixel Nation" style={{width:"35%"}}/>
          </div>
          <div style={{height: "80px" ,color:"black" ,textDecoration: "none", fontSize: "12px" }}>
            <span>TAKE YOUR BUSINESS TO THE NEXT LEVEL</span>
          </div>
        </div>
        <div style={{width:"50%"}}>
        <div >
          <span style={{color:"black" ,textDecoration: "none", fontWeight: "bold", fontSize: "12px" }}>Our Newsletter</span>
        </div>
        <div style={{display:"flex"}}>
          <div style={{ height: "30px" , width:"200px" , backgroundColor: "#c5c0c0", borderRadius:"30px"}} ></div>
          <div style={{ height: "30px" , width:"100px", backgroundColor: "#19A7CE",borderRadius:"30px", marginLeft:"-100px", padding: "2px 0px 5px 10px ",color:"white" ,textDecoration: "none",fontWeight:"bold"}} >Subscribe</div>
        </div>
        <div>
          <span style={{height: "80px", width:"100px" ,color:"black" ,textDecoration: "none", fontSize: "12px" }}>Stay up-to-date with the latest news and updates by subscribing to our newsletter today</span>
        </div>
        </div>
        <div style={{ width: "15%" }}>
          <div>
            <span style={{fontSize: "20px" ,color:"black" ,textDecoration: "none", fontWeight:"bold"}}>+44 7462 070969</span>
            <br/>
            <span style={{fontSize: "13px" ,color:"black" ,textDecoration: "none" }}>Give us a call</span>
          </div>
        </div>     
        </div>
      <Divider />
      <div className="abc">
        <div style={{ width: "40%" }}>
          <FontAwesomeIcon icon={faCopyright} /> 2023 COPYRIGHT PIXELS NATION.All RIGHTS RESEVED{" "}
        </div>
        <div style={{ width: "40%" }} className="credit-cards">
          <img src={creditimage} alt="Payment Options" />
        </div>
        <div className="links">
          <a
            style={{ width: "20%", color: "black", textDecoration: "none" }}
            href="EMPTY"
          >
            HOME
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{ width: "20%", color: "black", textDecoration: "none" }}
            href="EMPTY"
          >
            PRICING
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{ width: "20%", color: "black", textDecoration: "none" }}
            href="EMPTY"
          >
            PORTFOLIO
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
