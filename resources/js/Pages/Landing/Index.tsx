import type { FC, ReactNode } from "react";
import AppLayoutWrapper from "./AppLayoutWrapper";
import { Link } from "@inertiajs/react";
import Scene from "@/Components/three/Scene";

type InertiaPage = FC & {
    layout?: (page: ReactNode) => ReactNode;
};

const Index: InertiaPage = () => {
    return (
        <section className="relative w-full h-full">
            <Scene />
        </section>
        // <div className=" p-5 flex flex-col space-y-2">
        //     <h1 className="font-bold text-4xl text-accent"> Fake tytuł</h1>
        //     <p className=" text-text-muted">
        //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
        //         praesentium.
        //     </p>
        //     <div className=" space-x-3">
        //         <Link
        //             href={"/shop"}
        //             className=" border border-accent-deep p-2 rounded"
        //         >
        //             Shop
        //         </Link>
        //         <Link
        //             href={"/login"}
        //             className=" border border-border p-2 rounded bg-accent-muted text-text-primary"
        //         >
        //             Login
        //         </Link>
        //     </div>
        // </div>
    );
};

Index.layout = (page: ReactNode) => <AppLayoutWrapper>{page}</AppLayoutWrapper>;

export default Index;
