import { Points, useTexture } from "@react-three/drei";
import { useMemo } from "react";

import * as THREE from "three";

THREE.ColorManagement.enabled = false;

function RipplePoints() {
    const texture = useTexture("/textures/circle.png");
    const color = "#22d3ee";
    const count = 100;
    const sap = 3;
    console.log(texture);
    const positions = useMemo(() => {
        let positions = [];

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sap * (xi - count / 2);
                let z = sap * (zi - count / 2);
                const y = 0;

                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sap]);

    return (
        <Points positions={positions}>
            <pointsMaterial
                map={texture}
                color={color}
                size={1}
                transparent
                alphaTest={0.5}
            />
        </Points>
    );
}

export default RipplePoints;
