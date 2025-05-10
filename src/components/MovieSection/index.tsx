import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import MovieList from "../MovieList";
import useFetchMovies from "../../hooks/useFetchMovies";
import useFilterMovies from "../../hooks/useFilterMovies";


const MovieSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { movies, error, isLoading } = useFetchMovies()
  const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFilterMovies(movies)

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            placeholder="Buscar filmes..."
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {filteredMovies.length === 0 ? (
          <p className={styles.error}>Nenhum filme encontrado. Tente novamente.</p>
        ) : (
          <MovieList movies={filteredMovies} />
        )}
      </section>
    </main>
  );
};

export default MovieSection;
