import { Suspense } from "react";
import AnimationCanvas from "./AnimationCanvas";

export default function Scene() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <AnimationCanvas />
            </Suspense>
        </>
    );
}
