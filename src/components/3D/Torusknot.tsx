import { useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export default function Torusknot(props: any) {
	const ref: React.RefObject<any> = useRef()
	const [clicked, click] = useState(false)
	const [hovered, hover] = useState(false)
	useCursor(hovered)

	useFrame((_, delta) => {
		if (ref.current) {
			ref.current.rotation.x = ref.current.rotation.y += delta / 2;
		}
	});

	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1.25}
			onClick={() => click(!clicked)}
			onPointerOver={() => hover(true)}
			onPointerOut={() => hover(false)}>
			<torusKnotGeometry args={[1, 0.2, 128, 32]} />
			<meshStandardMaterial color="orange" />
		</mesh>
	)
}