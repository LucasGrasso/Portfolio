
import styles from './TitleText.module.css';

export default function TitleAcsiiArt() {
	return (
		<h1 className={styles.h1}>
			<pre>
				{`
					_                           _____                         
					| |                         |  __ \\                        
					| |    _   _  ___ __ _ ___  | |  \\/_ __ __ _ ___ ___  ___  
					| |   | | | |/ __/ _\` / __| | | __| '__/ _\` / __/ __|/ _ \\ 
					| |___| |_| | (_| (_| \\__ \\ | |_\\ \\ | | (_| \\__ \\__ \\ (_) |
					\\_____/\\__,_|\\___\\__,_|___/  \\____/_|  \\__,_|___/___/\\___/ 
																			
					`}
			</pre>
		</h1>
	)
}