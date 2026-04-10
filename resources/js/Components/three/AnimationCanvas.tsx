import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense } from "react";
import RipplePoints from "./RipplePoints";

THREE.ColorManagement.enabled = false;

export default function AnimationCanvas({}: {}) {
    return (
        <Canvas
            className="w-full h-full "
            camera={{ position: [115, 67, -99], fov: 75 }}
            style={{ background: "#000000" }}
        >
            <Suspense fallback={null}>
                <RipplePoints />
            </Suspense>
        </Canvas>
    );
}

//Points to prymityw R3F który renderuje chmurę punktów — czyli wiele małych kropek/cząsteczek naraz w jednym draw call.
//W kontekście ripple wave z tutoriala — zamiast rysować każdą kulkę osobno (co byłoby bardzo drogie), tworzysz jedną siatkę punktów:
//tsx
