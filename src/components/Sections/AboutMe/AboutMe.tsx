import Figures from '../../../assets/Figures';
import styles from './AboutMe.module.css';

export default function AboutMe() {
	return (
		<div className={styles.aboutMe}>
			<h1>About Me</h1>
			<span>
				Since I was young,
				I have been fascinated by natural sciences, math and technology,
				and nowadays I try to channel that passion through programming. <br />
				I specialize in Solidity, TypeScript and Python, but I'm interested in all exponential technologies,
				especially everything related to Blockchain and AI.
			</span>
			<span>
				I have experience working in the blockchain and software development industry, and I'm currently working as a blockchain & backend developer.<br />
				I am also pursuing a degree in Data Science at the University of Buenos Aires.
			</span>
			<Figures />
		</div>
	)
}