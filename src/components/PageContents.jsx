import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function PageContents() {
  const [movieList, setMovieList] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=ko",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODA4OWU2ZTczMjYxMGU2MGY2NjdlOGI4MzlmYmRhNCIsInN1YiI6IjY1OGQ1YmQ5ZmRmYzlmNjAwNmUwNDRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BkGBO67NlrKx4UlP6xUVsAVOErUTPZHpPwRUwUCHChM`,
          },
        }
      );

      setMovieList(data.results);
      console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {movieList.map((movie, idx) => (
        <Card key={idx} data={movie} />
      ))}
    </>
  );
}
