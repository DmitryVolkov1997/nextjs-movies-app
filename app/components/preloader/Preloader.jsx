import classes from './Preloader.module.scss'
import { Rings	 } from  'react-loader-spinner'

const Preloader = () => {
	return (
		<div className={classes.preloader}>
			<Rings
				height="120"
				width="120"
				color='grey'
				ariaLabel='loading'
			/>
		</div>
	)
}

export default Preloader
