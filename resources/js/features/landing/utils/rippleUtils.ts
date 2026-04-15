import { type RippleConfig } from "@/constants/rippleConfig";

type RippleGrid = {
    positions: Float32Array;
    normXZ: Float32Array;
};

/**
 * Calculates the height of the wave at a given (x, z) position and time.
 *
 * The wave height is determined by a sine function that creates a ripple effect.
 * The frequency and amplitude of the wave are defined in the RippleConfig.
 */
function calculateWaveHeight(
    x: number,
    z: number,
    time: number,
    config: RippleConfig,
): number {
    const { waveFrequency, amplitude } = config;
    return Math.sin(waveFrequency * (x ** 2 + z ** 2 + time)) * amplitude;
}

/**
 * Generates a grid of points representing the initial state of the ripple.
 *
 * The grid is centered around the origin, and the height of each point is
 * determined by the wave function at time 0.
 */
function generateRippleGrid(config: RippleConfig): RippleGrid {
    const positions = [];
    const normXZ = [];
    const { pointCount, pointSpacing } = config;

    for (let indexX = 0; indexX < pointCount; indexX++) {
        for (let indexZ = 0; indexZ < pointCount; indexZ++) {
            const x = pointSpacing * (indexX - pointCount / 2); // Centering the points around the origin
            const z = pointSpacing * (indexZ - pointCount / 2);

            const normX = indexX / (pointCount - 1); // Normalized x coordinate for texture mapping
            const normZ = indexZ / (pointCount - 1);

            const y = calculateWaveHeight(x, z, 0, config); // Initial y position based on the wave function at time 0

            positions.push(x, y, z);
            normXZ.push(normX, normZ);
        }
    }
    return {
        positions: new Float32Array(positions),
        normXZ: new Float32Array(normXZ),
    };
}

export { calculateWaveHeight, generateRippleGrid };
