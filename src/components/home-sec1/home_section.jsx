import React from "react";
import "./home_section.css";
import Firstim from "../../assests/landingimg2.svg";
const Home=()=>{
    return(
        <div className="section1">
            <div className="home_content">
                <h2 className="home_title">
                Communicate.<br></br>
                Collaborate. Create.
                </h2>
                <p className="home_information1">
                We are putting knowledge in motion, and innovation in action.
                </p>
                <button className="btninside">Meet the team</button>
            </div>

            <div className="home_section1image">
                <img src={Firstim} alt="" />
            </div>
            <div className="home_Intro">
                <div className="Intro-1 Intro-item"> 
                    <p style={{fontWeight:"bold"}}>ki·​ne·​sis | किनेसिस <br></br>

                         [noun] <br></br>
                        movement; motion
                    </p>
                    <p className="Intro-Content">
                    <span style={{fontWeight:"bold"}}>Kinesis Technical Society</span> is a group of driven learners, with a common love for technology and a strong belief in the power of community learning. We strive to explore and advance in technology, engineering, and science.
                    </p>
                </div>
                <div className="Intro-2 Intro-item"> 
                   <p>In the Collision of Insight,<br></br> We Discover the Future</p>
                </div>
            </div>
        </div>
    );
}
export default Home;