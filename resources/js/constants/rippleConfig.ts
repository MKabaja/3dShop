export interface RippleConfig {
    pointCount: number;
    pointSpacing: number;
    waveFrequency: number;
    amplitude: number;
    color: string;
    texturePath: string;
}

/**
 * Configuration for the ripple effect in the 3D scene.
 *
 * - `pointCount`: Number of points in the ripple grid (e.g., 100 for a 100x100 grid).
 * - `pointSpacing`: Distance between points in the grid (e.g., 5 units).
 * - `waveFrequency`: Frequency of the ripple waves (e.g., 0.0015 for a slow wave).
 * - `amplitude`: Height of the waves (e.g., 2 for moderate waves).
 * - `color`: Color of the points in the ripple (e.g., "#22d3ee" for a cyan color).
 * - `texturePath`: Path to the texture used for the points (e.g., "/textures/circle.png").
 *
 * This configuration is used in the `RipplePoints` component to create and animate the ripple effect.
 */
export const rippleConfig: RippleConfig = {
    pointCount: 80,
    pointSpacing: 3.8,
    waveFrequency: 0.0008,
    amplitude: 3.5,
    color: "#0e7490",
    texturePath: "/textures/circle.png",
};
