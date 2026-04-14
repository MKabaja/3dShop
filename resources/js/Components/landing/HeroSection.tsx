import { ModelPlaceholder } from "./ModelPlaceHolder";
import { useTranslation } from "react-i18next";
import HeroBadge from "./HeroBadge";
import { ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

export default function HeroSection() {
    const { t } = useTranslation("landing", { keyPrefix: "hero" });

    const title = t("title", {
        returnObjects: true,
    }) as { before: string; highlight: string };

    return (
        <section className=" md:grid md:grid-cols-4 relative min-h-screen flex flex-col items-start justify-start px-16 mt-22 space-y-10">
            <div className="mt-5 space-y-5 col-span-3">
                <HeroBadge />
                <h1 className=" font-normal md:text-5xl xl:text-6xl text-4xl tracking-tight">
                    {title.before}{" "}
                    <span className="text-accent font-semibold">
                        {title.highlight}
                    </span>
                </h1>
                <p className="mt-8 text-text-muted italic">{t("subtitle")}</p>
                <div className="grid  grid-cols-3 gap-4 ">
                    <Button label={t("ctaPrimary")} className="col-span-2" />
                    <Button
                        label={t("ctaSecondary")}
                        variant="outline"
                        className="col-span-2"
                    />
                </div>
                <small className="flex items-center space-x-2">
                    <ShieldCheck className=" text-accent-muted" size={16} />
                    <span className="text-text-secondary">{t("trust")}</span>
                </small>
            </div>
        </section>
    );
}
