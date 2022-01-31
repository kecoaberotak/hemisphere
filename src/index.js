import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

// props bersifat read-only, biasa digunakan untuk mentransfer data dari parent component ke child component
// state bersifat dinamis, state hanya bisa diakses dalam component dtate itu dibuat, atau diubah dulu ke props agar bisa diakses oleh child component
// state juga me-rerender ketika ada prubahan pada state

// memakai class bukan functional component untuk menggunakan state. (tapi sekarang functional component sudah ada fitur hooks yg memungkinkan menggunakan state)
class App extends React.Component {

    // // fungsi constructor akan dijalankan pertama kali, sangat bagus untuk insialisasi state atau one time setup
    // constructor(props){
    //     super(props)

    //     // null dujadikan nilai default
    //     this.state = {latitude: null, errorMessage: ""}
    // }



    // cara lain insialisasi state pada class tanpa constructor
    state = {latitude: null, errorMessage: ""}


    // fungsi untuk melakukan load di awal, mirip seperti constructor, tapi fungsi ini bagus bila ingin melakukan load berkali2
    componentDidMount() {
        // fungsi untuk mengambil lokasi dari user
        window.navigator.geolocation.getCurrentPosition(
            // callback untuk mendapatkan lokasi user
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            // callback untuk menampilkan pesan error bila user menolak memberitau lokasi
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }


    render() {
        if(!this.state.latitude && this.state.errorMessage){
            return <div>{this.state.errorMessage}</div>
        }
        
        if(this.state.latitude && !this.state.errorMessage){
            return <div><HemisphereDisplay latitude={this.state.latitude}/></div>
        }

        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))