import classes from './Search.module.scss'

const Search = ({ handleSearch, search }) => {
	return (
		<input value={search} className={classes.search} type='text' onChange={(e) => handleSearch(e.target.value)} />
	)
}

export default Search
