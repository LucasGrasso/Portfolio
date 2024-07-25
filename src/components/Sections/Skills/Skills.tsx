import styles from './Skills.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import languages from './languages';

import { Toolbox, categories, mainColourOfCategory } from '../../Toolbox';

import { mathML1, mathML2 } from './Skills.constants';

export default function Skills() {
	return (
		<div className={styles.wrapper} id="toolbox">
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					<div dangerouslySetInnerHTML={{ __html: mathML1 }} className={styles.math} />
					<div dangerouslySetInnerHTML={{ __html: mathML2 }} className={styles.math} />
				</div>
				<span>...If i could.</span>
			</div>
			<div className={styles.animationOuterWrapper}>
				<div className={styles.animationWrapper}>
					<div className={styles.skillsWrapper}>
						{
							languages.map((language, index) => {
								return (
									<div key={index}>
										<SyntaxHighlighter className={styles.language} language={language.language} style={atomDark}>
											{language.text}
										</SyntaxHighlighter>
									</div>
								)
							})
						}
					</div>
					<div className={styles.skillsWrapper}>
						{
							languages.map((language, index) => {
								return (
									<div key={index}>
										<SyntaxHighlighter className={styles.language} language={language.language} style={atomDark}>
											{language.text}
										</SyntaxHighlighter>
									</div>
								)
							})
						}
					</div>
					<div className={styles.skillsWrapper}>
						{
							languages.map((language, index) => {
								return (
									<div key={index}>
										<SyntaxHighlighter className={styles.language} language={language.language} style={atomDark}>
											{language.text}
										</SyntaxHighlighter>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<div className={styles.fluentLanguages}>
				<h2>
					But i'm the most fluent in:
				</h2>
				<ul className={styles.list}>
					<li>Solidity</li>
					<li>Python</li>
					<li>Typescript</li>
				</ul>
			</div>
			<div className={styles.toolboxWrapper}>
				<h2>
					And i'm handy with:
				</h2>
				<Toolbox />
				<div className={styles.toolboxLegend}>
					{
						categories.map((category: string, index: number) => {
							return (
								<div key={index} className={styles.legendItem}>
									<div className={styles.rectangle} style={{ "--color": mainColourOfCategory(category) } as React.CSSProperties} />
									<span>{category}</span>
								</div>
							)
						})
					}
				</div>
			</div>
		</div >
	)
}