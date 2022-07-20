import classes from './MovieItem.module.scss'
import Image from 'next/image'

const MovieItem = ({ imdbID: id, Title: title, Type: type, Poster: poster, Year: year }) => {
	return (
		<div className={classes.item}>
			{
				poster !== 'N/A' ? <Image src={poster} alt={title} width={300} height={450} objectFit={'contain'} objectPosition={'center'} /> :
					<Image src={'https://place-hold.it/300x450'} alt={title} width={300} height={450} objectFit={'contain'} objectPosition={'center'} />
			}
			<div className={classes.info}>
				<h3 className={classes.title}>{`${title.slice(0, 17)}...`}</h3>
				<div className={classes.row}>
					<p className={classes.type}>{type}</p>
					<p className={classes.year}>{year}</p>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
