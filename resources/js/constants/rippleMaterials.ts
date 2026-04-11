import * as THREE from "three";

/**
 * Vertex shader for the ripple point grid.
 *
 * Runs once per point on the GPU. Responsibilities:
 * - Projects the 3D point position onto the 2D screen (gl_Position)
 * - Sets the rendered size of each point in pixels (gl_PointSize)
 * - Passes the normalized grid coordinates (normXZ) to the fragment shader via a varying
 *
 * `projectionMatrix` and `modelViewMatrix` are automatically provided by Three.js.
 * `position` is the built-in attribute wired to the `attributes-position` bufferAttribute.
 * `normXZ` is our custom attribute wired to the `attributes-normXZ` bufferAttribute.
 */
const vertexShader = `
    attribute vec2 normXZ;
    varying vec2 vNormXZ;

    void main() {
        vNormXZ = normXZ;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 3.0; 
    }
    `;

/**
 * Fragment shader for the ripple point grid.
 *
 * Runs once per pixel of each rendered point. Responsibilities:
 * - Samples the circle texture using gl_PointCoord (built-in: pixel position within
 *   a single point quad, from [0,0] to [1,1]) to get the alpha of the circle shape
 * - Computes a smooth edge fade based on the point's position in the grid (vNormXZ):
 *   fadeX fades the left and right edges, fadeZ fades the front and back edges.
 *   Both are multiplied together to produce a fade from all four sides.
 * - Outputs the final color with combined alpha (texture alpha * edge fade)
 *
 * FADE = 0.22 means the outer 22% of the grid on each side fades to transparent.
 */
const fragmentShader = `
    uniform sampler2D uTexture;
    uniform vec3 uColor;
    varying vec2 vNormXZ;

    const float FADE = 0.22;

    void main() {
        float alpha = texture2D(uTexture, gl_PointCoord).a;

        float fadeX = smoothstep(0.0, FADE, vNormXZ.x) * smoothstep(1.0, 1.0 - FADE, vNormXZ.x);
        float fadeZ = smoothstep(0.0, FADE, vNormXZ.y) * smoothstep(1.0, 1.0 - FADE, vNormXZ.y);

        gl_FragColor = vec4(uColor, alpha * fadeX * fadeZ);
    }
    `;

/**
 *
 * Factory function to create a ShaderMaterial for the ripple points, given a color and texture.
 * This encapsulates the shader setup and allows for easy reuse if we want to create multiple
 * ripple materials with different colors or textures in the future.
 *
 * @param color - The base color of the ripple points, as a hex string (e.g. "#00aaff").
 * @param texture - A THREE.Texture object representing the circle texture to use for each point.
 * @returns A THREE.ShaderMaterial configured with the ripple shaders and uniforms.
 */

function createRippleMaterial(color: string, texture: THREE.Texture) {
    return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            uTexture: { value: texture },
            uColor: { value: new THREE.Color(color) },
        },
        transparent: true,
        depthWrite: false,
    });
}
export { vertexShader, fragmentShader, createRippleMaterial };
