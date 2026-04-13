import { ModelPlaceholder } from "./ModelPlaceHolder";

export default function HeroSection() {
    return (
        <section className="min-h-screen grid grid-cols-2 items-center px-16 gap-16">
            <div>
                <h1>Masz pomysł? Zamienimy go w gotowy produkt.</h1>
                <p>
                    Projektujemy i drukujemy elementy dopasowane do Twoich
                    potrzeb — od dekoracji po funkcjonalne rozwiązania do domu i
                    biura.
                </p>
                <div>
                    <button>Zrealizuj swój pomysł</button>
                    <button>Zobacz jak to działa</button>
                </div>
                <p>Nie potrzebujesz modelu 3D — pomożemy Ci go stworzyć.</p>
            </div>
        </section>
    );
}
