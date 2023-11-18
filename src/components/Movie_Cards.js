import React from "react";
import "./Movie_Cards.css";

class Movie_Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      filterMovies: []
    };
  }

  filterMovieItems(e) {
    this.setState(
      {
        searchQuery: e.target.value,
        filterMovies: this.props.movieList.filter((movie, i) =>
          movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      },
      () => {
        console.log(this.state.filterMovies);
      }
    );
  }

  render() {
    let { movieList } = this.props;
    return (
      <>
        <div>
          <h1 className="Movie-title">Movies App</h1>
        </div>
        <div className="searchcontainer">
          <input
            type="search"
            value={this.state.searchQuery || ""}
            onChange={(e) => this.filterMovieItems(e)}
            placeholder="Search Movie Name... "
          ></input>
        </div>
        <div className="moviecontainer">
          {this.state.filterMovies.length <= 0
            ? movieList.map((movie, i) => (
                <div className="moviecard" key={i}>
                  <img src={movie.Poster} alt={i} />
                  <div className="moviedesc">
                    <h3>{movie.Title}</h3>
                  </div>
                </div>
              ))
            : this.state.filterMovies.map((movie, i) => (
                <div className="moviecard" key={i}>
                  <img src={movie.Poster} alt={i} />
                  <div className="moviedesc">
                    <h3>{movie.Title}</h3>
                  </div>
                </div>
              ))}
        </div>
      </>
    );
  }
}

export default Movie_Cards;
