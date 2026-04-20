import type { FC, ReactNode } from 'react';
import AppLayoutWrapper from './AppLayoutWrapper';
import HeroSection from '@features/landing/components/HeroSection';
import TrustBarSection from '@/features/landing/components/TrustBarSection';
import Scene from '@features/landing/components/three/Scene';
import FeaturesSection from '@/features/landing/components/FeaturesSection';
import HowItWorks from '@/features/landing/components/HowItWorks';

type InertiaPage = FC & {
    layout?: (page: ReactNode) => ReactNode;
};

const Index: InertiaPage = () => {
    return (
        <>
            <Scene />
            <div className='relative z-10'>
                <HeroSection />
                <TrustBarSection />
                <FeaturesSection />
                <HowItWorks />
            </div>
        </>
    );
};

Index.layout = (page: ReactNode) => <AppLayoutWrapper>{page}</AppLayoutWrapper>;

export default Index;
