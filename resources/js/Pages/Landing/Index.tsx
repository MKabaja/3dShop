import React from "react";
export default function Landing() {
    return (
        <div className="min-h-screen bg-base flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-sans text-accent mb-4">3D Shop</h1>
                <p className="text-text-secondary font-mono text-lg mb-8">
                    // premium druk 3D
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="bg-accent text-base px-6 py-3 font-sans font-semibold hover:bg-accent-hover transition-colors">
                        Zobacz produkty
                    </button>
                    <button className="border border-accent text-accent px-6 py-3 font-sans hover:bg-accent hover:text-base transition-colors">
                        Zamów projekt
                    </button>
                </div>
            </div>
        </div>
    );
}
