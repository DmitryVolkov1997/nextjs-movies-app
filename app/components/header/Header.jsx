import classes from './Header.module.scss'
import Container from '../container/Container'
import { MdVideoCameraBack } from 'react-icons/md'
import Link from 'next/link'

const Header = () => {
	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.row}>
					<MdVideoCameraBack className={classes.logo} />
					<Link href={'/'}>
						<a className={classes.link}>Repo<span>sitory</span></a>
					</Link>
				</div>
			</Container>
		</header>
	)
}

export default Header
