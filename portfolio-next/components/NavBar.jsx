import NextLink from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<h1>
					<a href='/'>DJ's Portfolio</a>
				</h1>
				<ul>
					<li>
						<NextLink href='/#home' passHref>
							<a>Home</a>
						</NextLink>
					</li>
					<li>
						<NextLink href='/#projectGallery' passHref>
							<a>Projects</a>
						</NextLink>
					</li>
					<li>
						<NextLink href='/#contact-form' passHref>
							<a>Contact</a>
						</NextLink>
					</li>
					<li>
						<NextLink
							href='https://mdx-remote-blog-mm0xvyge4-djcarrillo6.vercel.app/'
							passHref>
							<a>Blog</a>
						</NextLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
