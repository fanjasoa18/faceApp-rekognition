import React from "react";
import pic from "./../Pics/pic.png"
function Header() {
    return(
        <>
            <div className="head">
                <img src={pic} />
                <h1>FACEAPP REKOGNITION</h1>
            </div>
        </>
    )
}

export default Header;