import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

// GET list film
export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  //   console.log({movieList: movie});
  return movie.data.results;
};

// mencari film
export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`
  );
  // console.log(search);
  return search.data;
};
