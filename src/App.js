import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import Pages from "./components/pages";
import Images from "./components/images";

function App() {
	return (
		<Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
			<Suspense fallback={null}>
				<ScrollControls pages={4} damping={4}>
					<Scroll>
						<Images />
					</Scroll>
					<Scroll html>
						<Pages />
					</Scroll>
				</ScrollControls>
				<Preload />
			</Suspense>
		</Canvas>
	);
}

export default App;
