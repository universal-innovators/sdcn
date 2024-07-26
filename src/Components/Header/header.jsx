import React from "react";
// import nitImage from "./Himages/nitpatna.jpeg";
// import delhiImgae from "./Himages/unidelhi.png";
import sapien from "./Himages/sapientia.png";
// import logo from "./Himages/logosdcn.png";
import gtbit from "./Himages/gtbit.jpg";
import springer from "./Himages/springeer.png";
import portagul from "./Himages/portagal.jpg";
import sdcn from "./Himages/sdcn.png"
import vste from "./Himages/vste.jpg"
import "./header.css";

function HeaderMain() {
  return (
    <div className="headerMain">
      <div className="hcontainer">
        {/* images  */}
        
            <div className="headerLogo">
            <img src={gtbit} className="logoImg"/>   
            <img src={vste} className="logoImg"/>                                       
            </div>
            <div className="headerLogo">
              <img src={portagul} className="logoImg"/>
              <img src={require("../Footer/Himages/ksmv.png")} className="logoImg" style={{"margin":"0 auto","width":"8rem","height":"auto"}}/>  
              
            </div>
            
        
        </div>
        {/* main top part  */}
        <div className="hTopPart">
          <div className="htop1">
            <p>
            International Conference on Artificial Intelligence and Networking <br/>(ICAIN-2024)
            </p>
            
          </div>
          <div className="htop2">
            <p className="hhead">
              ORGANISED BY :{" "}
              <span className="hblue">
              Guru Tegh Bahadur Institute of Technology (GTBIT), GGSIPU, Delhi{" "}
              </span>
              <br/>
              <span >in association with</span>{" "}
              <span className="hblue">Portalegre Polytechnic University, Portugal</span> & <br/><span className="hblue">Institute of Technology and Business in České Budějovice, Czech Republic</span><br/> &
              <span className="hblue"> Keshav Mahavidyalaya, Delhi University</span>
            </p>
            <p className="hspringer">Springer LNNS Approved Conference (Indexed in Scopus, EI, WoS and Many More)</p>
            {/* <p></p> */}
            <p>24th - 25th September 2024<br/><span style={{"color":"red"}}></span></p>
          </div>
        </div>

        
        <div className="headerLogo" style={{"display":"block","margin":"auto"}}>
              {/* <img src={sdcn} className="logoImg" style={{"margin":"0 auto","width":"9rem","height":"auto"}}/>  
              <img src={springer} className="logoImg" style={{"margin":"0 auto","width":"8rem","height":"auto"}}/>   */}
                        
        </div>
           
      
      </div>
    
  );
}

export default HeaderMain;
