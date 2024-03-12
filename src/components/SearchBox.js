import React, { Component } from "react";
import axios from "axios";
import logo from './logo.jpg';
import '../styles/Styles.css'

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: [],
      query: "",
    };
  }

  handleSearch = (e) => {
    const searchQuery = e.target.value;
    this.setState({ query: searchQuery });

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=cfe422613b250f702980a3bbf9e90716`
      )
      .then((response) => {
        this.setState({ searchData: response.data.results });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    return (
      <div >
    <div className="background-poster">
    <div className="nav">
      <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
        <input
          type="text"
          placeholder="Search for movies..."
          value={this.state.query}
          onChange={this.handleSearch}
        />
        <div className="catogery">
            <a href="#">Admin</a><a href="#">Movies & TV</a><a href="#">Celebs</a><a href="#">Community</a><a href="#">WatchList</a>
        </div>
        <button>Login</button>
      </div>
    </div>
      <div className="center-container">
      <div className="movie-grid"> 
        {this.state.searchData.map(movie => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt="img"
            />
            <div className="movie-title">{movie.original_title}</div>
          </div>
        ))}
      </div>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Movie Site</p>
      </div>
    </footer>
      </div>
      
    );
  }
}

export default SearchBox;
