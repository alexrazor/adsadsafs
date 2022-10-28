import classes from './main-header.module.css';
import Link from 'next/link';

const MainHeader = props=> {
	
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">React Online Marathon</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainHeader;