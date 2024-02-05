//https://codesandbox.io/s/basic-demo-forked-5jvdu3?file=/src/App.js
// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii

import Home from "./components/Home/Home"
import MouseFollower from "./components/MouseFollower/MouseFollower"

export default function App() {
	const isNotMobile = window.innerWidth > 768;
	return (
		<>
			{isNotMobile && <MouseFollower />}
			<div className="App">
				<Home />
				<div style={{
					height: "400vh"
				}}></div>
			</div>
		</>
	)
}
