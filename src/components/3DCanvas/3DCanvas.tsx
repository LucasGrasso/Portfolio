import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { useState, useRef } from "react";
import AsciiRenderer from "../3D/AcsiiRenderer";
import Mountain from "../3D/Mountain";
import styles from './3DCanvas.module.css';
import { Vector3 } from "three";

export default function TDCanvas() {
	const [color,] = useState("FFFFFFF");

	const defaultCameraPosition = new Vector3(0, 0, 5);
	const defaultTarget = new Vector3(-0.19672038989012175, 0.34252186707017224, -0.19084934552398422);
	const desiredDistance = 2.8130368240544836;

	const cameraRef = useRef<THREE.PerspectiveCamera>();

	return (
		<div className={styles.canvasWrapper}>
			<Canvas className={styles.canvas}>
				<color attach="background" args={['black']} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />
				<Mountain />
				<PerspectiveCamera
					makeDefault
					position={defaultCameraPosition}
					ref={cameraRef}
				/>
				<OrbitControls
					enableDamping={false}
					enablePan={false}
					enableZoom={false}
					enableRotate={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					minDistance={desiredDistance}
					maxDistance={desiredDistance}
					target={defaultTarget}
					camera={cameraRef.current}
				/>
				<AsciiRenderer fgColor={color} bgColor="black" />
			</Canvas>
		</div>
	);
}
