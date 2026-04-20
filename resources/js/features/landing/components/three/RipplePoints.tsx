import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import {
    calculateWaveHeight,
    generateRippleGrid,
} from '../../utils/rippleUtils';
import { rippleConfig } from '../../constants/rippleConfig';
import { createRippleMaterial } from '../../constants/rippleMaterials';

THREE.ColorManagement.enabled = false;

function RipplePoints() {
    const { color, pointCount, pointSpacing, texturePath } = rippleConfig;
    const texture = useTexture(texturePath);
    const pointsRef = useRef<THREE.Points>(null);
    const time = useRef(0);

    const { positions, normXZ } = useMemo(
        () => generateRippleGrid(rippleConfig),
        [],
    );

    const material = useMemo(
        () => createRippleMaterial(color, texture),
        [color, texture],
    );

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
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach='attributes-normXZ'
                    args={[normXZ, 2]}
                />
            </bufferGeometry>
            <primitive object={material} attach='material' />
        </points>
    );
}

export default RipplePoints;
