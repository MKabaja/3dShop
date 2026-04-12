import type { FC, ReactNode } from "react";
import AppLayoutWrapper from "./AppLayoutWrapper";
import HeroSection from "@/Components/landing/HeroSection";

import Scene from "@/Components/three/Scene";

type InertiaPage = FC & {
    layout?: (page: ReactNode) => ReactNode;
};

const Index: InertiaPage = () => {
    return (
        <>
            <Scene />
            <div className="relative z-10">
                <HeroSection />
            </div>
        </>
    );
};

Index.layout = (page: ReactNode) => <AppLayoutWrapper>{page}</AppLayoutWrapper>;

export default Index;
