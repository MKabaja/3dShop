import { Suspense } from "react";
import AnimationCanvas from "./AnimationCanvas";

export default function Scene() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            <Suspense fallback={<div>Loading...</div>}>
                <AnimationCanvas />
            </Suspense>
        </div>
    );
}
