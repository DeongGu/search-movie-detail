import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchMovieData(state) {
  const [movieList, setMovieList] = useState([]);

  const fetchData = async (state) => {
    let url = "";
    if (["now_playing", "popular", "top_rated"].includes(state)) {
      url = `https://api.themoviedb.org/3/movie/${state}?language=ko`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?query=${state}&language=ko`;
    }

    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODA4OWU2ZTczMjYxMGU2MGY2NjdlOGI4MzlmYmRhNCIsInN1YiI6IjY1OGQ1YmQ5ZmRmYzlmNjAwNmUwNDRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BkGBO67NlrKx4UlP6xUVsAVOErUTPZHpPwRUwUCHChM`,
        },
      });

      setMovieList(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(state);
  }, [state]);

  return movieList;
}
