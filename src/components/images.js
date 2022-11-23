import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils } from "three";

function Item({ ...props }) {
	const [hovered, setHovered] = useState(false);
	const ref = useRef();

	useFrame((state, delta) => {
		ref.current.material.grayscale = MathUtils.damp(
			ref.current.material.grayscale,
			hovered ? 0 : 1,
			4,
			delta
		);
	});

	return (
		<Image
			{...props}
			ref={ref}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		/>
	);
}

function Images() {
	const { width, height } = useThree((state) => state.viewport);
	const group = useRef();
	const data = useScroll();
	useFrame(() => {
		group.current.children[0].material.zoom = 1 + data.range(0, 1 / 4) / 4;
		group.current.children[1].material.zoom = 1 + data.range(0, 1 / 4) / 4;
		group.current.children[2].material.zoom =
			1 + data.range(0.3 / 4, 1 / 4) / 4;
		group.current.children[3].material.zoom =
			1 + data.range(0.75 / 4, 1 / 4) / 4;
		group.current.children[4].material.zoom = 1 + data.range(1 / 4, 1 / 4) / 6;
		group.current.children[5].material.zoom =
			1 + data.range(2.5 / 4, 1 / 4) / 6;
		group.current.children[6].material.zoom =
			1 + data.range(2.5 / 4, 1 / 4) / 6;
		group.current.children[7].material.zoom =
			1 + data.range(2.5 / 4, 1 / 4) / 6;
		group.current.children[8].material.zoom =
			1 + (1 - data.range(3 / 4, 1 / 4)) / 4;
	});

	return (
		<group ref={group}>
			<Item url="/images/01.jpg" scale={[3, 8, 1]} position={[-3, 0, 0]} />
			<Item
				url="/images/00.jpg"
				scale={[4, 2, 1]}
				position={[width * 0.1, height * 0.1, 2]}
			/>
			<Item
				url="/images/07.jpg"
				scale={[6, 3, 1]}
				position={[width * 0.25, -height * 0.75, 1]}
			/>
			<Item
				url="/images/04.jpg"
				scale={4}
				position={[-width * 0.25, -height * 1.1, 1]}
			/>
			<Item
				url="/images/08.jpg"
				scale={4}
				position={[width * 0.15, -height * 1.5, 1]}
			/>
			<Item
				url="/images/02.jpg"
				scale={[2.5, 1.5, 1]}
				position={[-1.75, -height * 2 - 1, 3]}
			/>
			<Item
				url="/images/03.jpg"
				scale={2.25}
				position={[0.75, -height * 2 - 1, 2]}
			/>
			<Item
				url="/images/06.jpg"
				scale={3}
				position={[4.5, -height * 2 - 1, 1]}
			/>

			<Image
				url="/images/10.jpg"
				scale={[width, height * 0.75, 1]}
				position={[0, -height * 3 - 1.5, 0]}
			/>
		</group>
	);
}

export default Images;
