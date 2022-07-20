import classes from './Footer.module.scss'
import Container from '../container/Container'

const Footer = () => {
	return (
		<footer className={classes.footer}>
		<Container>
			<div className={classes.row}>
				<p>© 2022,&nbsp; В.Д.Валентинович.</p>
			</div>
		</Container>
		</footer>
	)
}

export default Footer
