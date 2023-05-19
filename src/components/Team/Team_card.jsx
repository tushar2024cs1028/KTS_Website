import React from "react";
import "./Team_card.css";
import { RiGithubFill,RiInstagramFill ,RiLinkedinFill} from "react-icons/ri";


const Team_Card=({ imageSource, title, text, url1,url2,url3 })=>{
    return (
        <div className="Team_card ">
          <div className="Team_overflow">
            <img src={imageSource} alt="a wallpaper" className="Team_card-img-top" />
          </div>
          <div className="Team_card-body ">
            <h4 className="Team_card-title">{title}</h4>
            <p className="Team_card-text">
              {text
                ? text
                : ""}
            </p>
            <div className="Team_social_id">
            <a
              href={url1 ? url1 : "#!"}
              target="_blank"
              className="Team_btni"
              rel="noreferrer"
            >
              <button className="Team_btn" title="github" style={{    border: "2px solid #ffb000", borderRadius: "20px"}} ><RiGithubFill></RiGithubFill></button>
            </a>
            <a
              href={url2 ? url2 : "#!"}
              target="_blank"
              className="Team_btni"
              rel="noreferrer"
            >
              <button className="Team_btn" title="Linkdin" style={{    border: "2px solid red", borderRadius: "20px"}} ><RiLinkedinFill></RiLinkedinFill></button>
            </a>
            <a
              href={url3 ? url3 : "#!"}
              target="_blank"
              className="Team_btni"
              rel="noreferrer"
            >
              <button className="Team_btn" title="Instagram" style={{    border: "2px solid #14a2a2", borderRadius: "20px"}}  ><RiInstagramFill></RiInstagramFill></button>
            </a>
            </div>
          </div>
        </div>
      );
}
export  default Team_Card;