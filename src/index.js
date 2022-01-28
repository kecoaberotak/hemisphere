import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        // mengambil lokasi dari user
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return(
            <div>
                You are in the Northen Hemisphere
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))