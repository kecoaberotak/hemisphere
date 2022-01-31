import React from "react";

// bisa langsung memanggil value tanpa perlu props.value 
const HemisphereDisplay = ({latitude}) => {
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Nothern Hemisphere' : 'Southern Hemisphere';

    return(
        <div>
            {hemisphere}
        </div>
    )
}

export default HemisphereDisplay;