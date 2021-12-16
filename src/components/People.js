import React from "react";
import "../App.css"


class People extends React.Component {
    constructor() {
        super();

        this.state = {
            people: [],
            currentPerson: null,
            value: '',
        };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    
    fetchPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((res) => res.json()) 
            .then((data) => {
                this.setState({
                    people: data,
                });
            });
    };

    componentDidMount = () => {
        this.fetchPeople();
      };

    handleFormChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    
    handleFormSubmit(event) {
        event.preventDefault()
    }
    
    render () {
      return (
      <div className="people">
        
          <h1>Search for a Person</h1>
          <form onSubmit={this.handleFormSubmit}>
              <input 
              type='text'
              value={this.state.value}
              onChange={this.handleFormChange}/>
              <button type="submit">Submit</button>
            </form>
      
      </div>
      )
    }
  }
  
  export default People;