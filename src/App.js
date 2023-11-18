import "./App.css";
import React from "react";
import axios from "axios";
import Card from "./components/Movie_Cards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=45f0782a&s=war"
      );

      this.setState({
        movie: response.data.Search
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <Card movieList={this.state.movie} />
      </div>
    );
  }
}

export default App;
