import React from "react";
import TeamCard from "./Team_card";
import "./Team.css";
import { RiTeamFill,RiStackshareLine } from "react-icons/ri";
import TeamTag from "../../assests/Team/Team_Tag.svg";
import image1 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image2 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image3 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image4 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image5 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image6 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image7 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image8 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image9 from "../../assests/Team/Tushar Sharma CS.jpeg";



const Team_Member = () => {
    const cards = [
        {
            id: 1,
            title: "Tushar Sharma",
            image: image1,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 2,
            title: "Tushar Sharma",
            image: image2,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 3,
            title: "Tushar Sharma",
            image: image3,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 4,
            title: "Tushar Sharma",
            image: image4,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },

        {
            id: 5,
            title: "Tushar Sharma",
            image: image5,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 6,
            title: "Tushar Sharma",
            image: image6,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 7,
            title: "Tushar Sharma",
            image: image7,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""
        },
        {
            id: 8,
            title: "Tushar Sharma",
            image: image8,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""

        },
        {
            id: 9,
            title: "Tushar Sharma",
            image: image9,
            text: "Core Member",
            git: "",
            linkdin: "",
            insta: ""
        },


    ];
    return (
        <div className="Team_container ">
            <div className="Team_head">
                <div className="Team_Item_1 Team_Item">
                    <img src={TeamTag} alt="" />
                </div>
                <div className="Team_Item_1 Team_Item">
                    <h3 className="Team_Title">The Team</h3>
                    <p style={{width:"343px"}} className="Team_Descript_1">Together, we push boundaries, challenge norms, and create solutions that shape the future.</p>
                    <p><span className="Team_Descript"><RiTeamFill></RiTeamFill> Get To Know</span>
                    <span className="Team_Descript"><RiStackshareLine></RiStackshareLine>Join The Team</span>
                    </p>
                </div>


            </div>

            <div className="Team_row">
                {cards.map(({ title, image, text, git, linkdin, insta, id }) => (
                    <div className="Team_col" key={id}>
                        <TeamCard imageSource={image} title={title} text={text} url1={git} url2={linkdin} url3={insta} />
                    </div>
                ))}
            </div>
        </div>);
}
export default Team_Member;