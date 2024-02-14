//https://codesandbox.io/s/basic-demo-forked-5jvdu3?file=/src/App.js
// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii

import Home from "./components/Sections/Home/Home"
import MouseFollower from "./components/MouseFollower/MouseFollower"
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Sections/Skills/Skills";
import Projects from "./components/Sections/Projects/Projects";

export default function App() {
	const isNotMobile = window.innerWidth > 768;
	return (
		<>
			{isNotMobile && <MouseFollower />}
			<div className="App">
				<Home />
				<AboutMe />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</>
	)
}
