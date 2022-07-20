import classes from './MoviesList.module.scss'
import MovieItem from './movie-item/MovieItem'
import NotFound from './not-found/NotFound'

const MoviesList = ({ movies = [] }) => {
	return (
		<div className={classes.list}>
			{
				movies.length ? movies.map(movie => (
					<MovieItem key={movie.imdbID} {...movie} />
				)) : <NotFound/>
			}
		</div>
	)
}

export default MoviesList
