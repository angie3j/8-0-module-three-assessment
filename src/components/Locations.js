import React from "react";
import "../App.css"


class Locations extends React.Component {
  constructor() {
    super();

    this.state ={
        locations: [],
    };
}

fetchLocations = () => {
    fetch('https://ghibliapi.herokuapp.com/locations')
        .then((res) => res.json()) 
        .then((data) => {
            this.setState({
              locations: data,
            });
        });
};

componentDidMount = () => {
    this.fetchLocations();
  };


render () {
  return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button 
        type="submit"
        onClick={this.fetchLocations}
        >Show Locations
        </button>
      </div>
      );
  }
}

  
  export default Locations;