import { Points, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { calculateWaveHeight, generateRippleGrid } from "@/utils/rippleUtils";
import { rippleConfig } from "@/constants/rippleConfig";

THREE.ColorManagement.enabled = false;

function RipplePoints() {
    const { color, pointCount, pointSpacing, texturePath } = rippleConfig;
    const texture = useTexture(texturePath);
    const pointsRef = useRef<THREE.Points>(null);
    const time = useRef(0);

    const positions = useMemo(() => generateRippleGrid(rippleConfig), []);

    useFrame(() => {
        time.current += 15;

        if (!pointsRef.current) return;

        const positionAttribute =
            pointsRef.current.geometry.attributes.position;

        let index = 0;
        for (let indexX = 0; indexX < pointCount; indexX++) {
            for (let indexZ = 0; indexZ < pointCount; indexZ++) {
                const x = pointSpacing * (indexX - pointCount / 2);
                const z = pointSpacing * (indexZ - pointCount / 2);
                positionAttribute.setY(
                    index,
                    calculateWaveHeight(x, z, time.current, rippleConfig),
                );
                index++;
            }
        }
        positionAttribute.needsUpdate = true;
    });

    return (
        <Points ref={pointsRef} positions={positions}>
            <pointsMaterial
                map={texture}
                color={color}
                size={1.5}
                transparent
                alphaTest={0.5}
            />
        </Points>
    );
}

export default RipplePoints;
