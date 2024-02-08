import { useState } from 'react';
import styles from './Projects.module.css';
import { projects } from './projectsInfo';

export default function Projects() {
	const [filters,] = useState<string[]>([]);

	/* const selectOptions = tags.map(tag => {
		return {
			value: tag,
			label: tag.toLowerCase()
		}
	}) */

	return (
		<div className={styles.wrapper} id="projects">
			<h2 className={styles.title}>
				Some of my projects:
			</h2>
			<div className={styles.projectsOuterWrapper}>
				<div className={styles.projectsWrapper}>
					{
						projects.filter(project => {
							if (filters.length === 0) return true;
							return project.tags.some(tag => filters.includes(tag))
						}).map(project => {
							return (
								<div key={project.title} className={styles.project}>
									<div>
										<h2>
											{project.title}
										</h2>
										<p>
											{project.description}
										</p>
									</div>
									<a href={project.url} target="_blank" rel="noreferrer">
										{project.url}
									</a>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	);
}