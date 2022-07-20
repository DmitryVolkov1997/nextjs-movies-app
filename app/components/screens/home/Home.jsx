import classes from './Home.module.scss'
import Container from '../../container/Container'
import MoviesList from './movies-list/MoviesList'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../../../config'
import { setLoading, setMovies } from '../../../store/moviesSlice/moviesSlice'
import Preloader from '../../preloader/Preloader'
import Search from './search/Search'
import { setSearch } from '../../../store/searchSlice/searchSlice'
import Radio from './radio/Radio'
import { setRadio } from '../../../store/radioSlice/radioSlice'

const Home = () => {
	const dispatch = useDispatch()
	const { movies = [], loading } = useSelector(state => state.movies)
	const { radio } = useSelector(state => state.radio)
	const { search } = useSelector(state => state.search)
	
	const handleSearch = (nameMovie) => {
		dispatch(setSearch({ text: nameMovie }))
	}
	
	const filterMoviesByName = (search, radio = 'all') => {
		const fetchData = async () => {
			const { data } = await axios.get(`${BASE_URL}=${search.length ? search : 'matrix'}${radio !== 'all' ? `&type=${radio}` : ''}`)
			dispatch(setMovies({ data: data.Search }))
			dispatch(setLoading(false))
		}
		fetchData()
	}
	
	const handleCategory = (e) => {
		dispatch(setRadio({ type: e.target.dataset.type }))
	}
	
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${BASE_URL}=matrix`)
			dispatch(setMovies({ data: data.Search }))
			dispatch(setLoading(false))
		}
		fetchData()
	}, [])
	
	useEffect(() => {
		filterMoviesByName(search, radio)
	}, [search, radio])
	
	return (
		<div className={classes.home}>
			<Container>
				<div className={classes.content}>
					<Search handleSearch={handleSearch} search={search} />
					<div className={classes.group}>
						<Radio title={'All'} name={'category'} checked={radio === 'all'} value={'all'} typeMovie={'all'}
						       onChange={handleCategory} />
						<Radio title={'Movies only'} name={'category'} checked={radio === 'movie'} typeMovie={'movie'}
						       onChange={handleCategory} />
						<Radio title={'Series only'} name={'category'} checked={radio === 'series'} typeMovie={'series'}
						       onChange={handleCategory} />
					</div>
					{
						loading ? <Preloader /> : <MoviesList movies={movies} />
					}
				</div>
			</Container>
		</div>
	)
}

export default Home
