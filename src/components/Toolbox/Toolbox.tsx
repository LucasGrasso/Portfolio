'use client'
import React from 'react';
import styles from './Toolbox.module.css';
import { toolboxItems } from './toolbox.constants';
import { shuffle, randomColourPerCategory } from './toolbox.utils';

function Toolbox() {
	return (
		<div className={styles.toolbox}>
			{
				shuffle(toolboxItems).map((item, index) => {
					return (
						<div key={index} className={styles.tool} style={{ "--color": randomColourPerCategory(item.category) } as React.CSSProperties}>
							<span>{item.name}</span>
						</div>
					)
				})
			}
		</div>
	);
}

export { Toolbox };