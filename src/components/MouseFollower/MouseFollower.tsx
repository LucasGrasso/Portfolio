import { useEffect } from "react";
import styles from './MouseFollower.module.css';

const MouseFollower = () => {
	useEffect(() => {
		let cursor = document.getElementById("cursor");


		const updateCircle = (e: MouseEvent) => {
			/* setCurrentEvent(e); */
			if (!cursor) {
				return
			}

			cursor.style.left = e.clientX + "px",
				cursor.style.top = e.clientY + "px";

		}

		document.body.addEventListener("mousemove", updateCircle);

		return () => {
			document.removeEventListener("mousemove", updateCircle);
		};
	}, []);


	return <div id="cursor" className={styles.cursor}></div>;
};

export default MouseFollower;
