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
			</div>
		</div>
	)
}