import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";
import "./App.css";
const App = () => {
  // variabel penampungan data api
  const [popularMovies, setPopularMovies] = useState([]);

  // console.log(popularMovies);

  // menampilkan sekali data api
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  console.log({ popularMovies: popularMovies });

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-tittle">{movie.title}</div>
          <img
            className="Movie-image"
            alt=""
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      console.log({ query: query });
      // text area berfungsi
      // console.log({q})
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Tittle">Aditya Movies</h1>
        <input
          className="Movie-search"
          placeholder="Cari Film"
          onChange={({ target }) => search(target.value)}></input>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
