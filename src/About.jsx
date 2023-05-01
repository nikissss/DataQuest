import React from "react";
import web from "../src/images/team.png";
import Common from "./Common";

const About = () => {
    return(
        <>  
            <Common 
                name="About Us" 
                imgsrc={web} visit="/login" 
                btname="Contact Now"
            />
        </>
    );
};

export default About;