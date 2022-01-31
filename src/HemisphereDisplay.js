import React from "react";
import './hemisphere.css'
import northPic from './image/north.jpg'
import southPic from './image/south.jpg'

const hemisphereConfig = {
    North: {
        text: "It is Northern Hemisphere",
        picture: northPic
    },
    South: {
        text: "It is Southern Hemisphere",
        picture: southPic
    }
}

// bisa langsung memanggil value tanpa perlu props.value 
const HemisphereDisplay = ({latitude}) => {

    // ternary expression, mirip seperti if

    // versi 1
    // const hemisphere = latitude > 0 ? 'Nothern Hemisphere' : 'Southern Hemisphere';
    // const picture = latitude > 0 ? northPic : southPic;

    // versi lain pakai object
    const hemisphere = latitude > 0 ? 'North' : 'South';
    const {text, picture} = hemisphereConfig[hemisphere];

    // react harus return satu parent
    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt="hemisphere picture" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;