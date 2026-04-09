import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense } from "react";
import RipplePoints from "./RipplePoints";
import { OrbitControls } from "@react-three/drei";

THREE.ColorManagement.enabled = false;

export default function AnimationCanvas({}: {}) {
    return (
        <Canvas
            className="w-full h-full "
            camera={{ position: [100, 10, 100], fov: 75 }}
            style={{ background: "#000000" }}
        >
            <OrbitControls />
            <Suspense fallback={null}>
                <RipplePoints />
            </Suspense>
        </Canvas>
    );
}

//Points to prymityw R3F który renderuje chmurę punktów — czyli wiele małych kropek/cząsteczek naraz w jednym draw call.
//W kontekście ripple wave z tutoriala — zamiast rysować każdą kulkę osobno (co byłoby bardzo drogie), tworzysz jedną siatkę punktów:
//tsx
