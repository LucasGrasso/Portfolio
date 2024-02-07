import TDCanvas from "../3DCanvas/3DCanvas"
import styles from './Home.module.css';

export default function Home() {
	return (
		<div className={styles.home}>
			{/* <TitleAcsiiArt /> */}
			<div className={styles.canvas} style={{ pointerEvents: "none" }}>
				<TDCanvas />
			</div>

			<div className={styles.info}>
				<h1>
					Lucas Grasso Ramos
				</h1>
				<h3>
					Blockchain & Full-stack Dev.
				</h3>
				{/* <div className={styles.nav}>
					<ul className={styles.navList}>
						<li>
							<a href="#aboutMe">About me</a>
						</li>
						<li>
							<a href="#toolbox">Toolbox</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
					</ul>
				</div> */}
			</div>
		</div >
	)
}