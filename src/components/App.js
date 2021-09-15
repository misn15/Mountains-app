import React from "react";
import axios from "axios";
import Home from "./Home";
import Winter from "./Winter";

class App extends React.Component {
  state = { prices: [] };
  onSearchSubmit = async (searchTerm) => {
    const response = await axios.get("http://localhost:8000/Killington", {
      //  params: { searchTerm },
    });

    console.log(response.data);

    this.setState({ prices: response.data });
  };

  render() {
    return (
      <div>
        <h3>Found: {this.state.prices.length} prices</h3>
        <Winter onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

//AIzaSyBETHwfkJ_mJG1BQHkvjY80i_x8eMkfrAE
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=52%20Stanley%20Avenue%20Medford%20Massachusetts&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBETHwfkJ_mJG1BQHkvjY80i_x8eMkfrAE

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.70590677078608,-72.82285410571993&radius=15000&type=natural_feature&keyword=mountain&key=AIzaSyBETHwfkJ_mJG1BQHkvjY80i_x8eMkfrAE
//42.409884888204154, -71.11187388667754
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.409884888204154,-71.11187388667754&radius=500000&type=natural_feature&keyword=mountain&key=AIzaSyBETHwfkJ_mJG1BQHkvjY80i_x8eMkfrAE
