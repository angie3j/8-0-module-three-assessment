import React from "react";
import "../App.css"


class Movies extends React.Component {
    constructor() {
        super();

        this.state ={
            movies: [],
            currentMovie: null,
        };
    }

    fetchMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json()) 
            .then((data) => {
                this.setState({
                    movies: data,
                });
            });
    };

    componentDidMount = () => {
        this.fetchMovies();
      };
    
    handleDropdown = (event) => {
            let currentMovieObject = this.state.movies.find((movie) => {
                return movie.title === event.target.value;
            });
            
            this.setState({
                currentMovie: currentMovieObject,
            });
    };

    render () {

        let dropDownOptions = this.state.movies.map((movie) => {
            return <option>{movie.title}</option>;
        });

        return (
        <div className="movies">

            <h1>Select a Movie</h1>
            <select onChange={this.handleDropdown}>
                <option></option>
                { dropDownOptions }
            </select>
            
            <h1>{this.state.currentMovie?.title}</h1>
            <p>{this.state.currentMovie?.release_date}</p>
            <p>{this.state.currentMovie?.description}</p>
        
        </div>
        )
    }
  }
  
  export default Movies;