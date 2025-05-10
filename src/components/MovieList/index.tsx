import { MovieListProps } from '../../types/movie-list.types'
import CardMovie from '../CardMovie'
import styles from './MovieList.module.css'


const MovieList = ({movies}: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => <CardMovie key={movie.id} {...movie} />)}
    </ul>
  )
}

export default MovieList