import React from "react";
import myImage from "../images/myImage.jpeg"
function About ({image = myImage, about}){
    return(
        <aside>
            <img src = {image}  alt = "blog logo"></img>
            <p>{about}</p>
        </aside>
    );
}

export default About;