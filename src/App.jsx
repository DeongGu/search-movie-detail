import { useState } from "react";
import PageContents from "./components/PageContents";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import useFetchMovieData from "./hooks/useFetchMovieData";

function App() {
  const [movieState, setMovieState] = useState("now_playing");

  const movieList = useFetchMovieData(movieState);

  const handleMovieList = (state) => {
    setMovieState(state);
  };

  return (
    <>
      <PageHeader onMovieData={handleMovieList} />
      <PageContents movieList={movieList} />
      <PageFooter />
    </>
  );
}

export default App;
