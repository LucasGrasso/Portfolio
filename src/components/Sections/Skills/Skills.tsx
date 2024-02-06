import styles from './Skills.module.css';
import languages from './languages';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Skills() {
	const mathML = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
  		<mi>n</mi>
  		<mo>&#8712;</mo>
  		<mi>&#x2115;</mi>
  	</math>
  `;

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					<div dangerouslySetInnerHTML={{ __html: mathML }} className={styles.math} />
					<h1>, I'd speak <b>n</b> languages...</h1>
				</div>
				<span>...If i could.</span>
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
			<div className={styles.fluentLanguages}>
				<h2>
					But i'm the most fluent in:
				</h2>
				<ul className={styles.list}>
					<li>Python</li>
					<li>Solidity</li>
					<li>Typescript</li>
				</ul>
			</div>
		</div>
	)
}