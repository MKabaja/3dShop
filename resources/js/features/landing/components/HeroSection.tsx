import Container from "@/shared/ui/Container";
import { useTranslation } from "react-i18next";
import HeroBadge from "./HeroBadge";
import { TriangleAlert } from "lucide-react";
import Button from "@shared/ui/Button";

export default function HeroSection() {
    const { t } = useTranslation("landing", { keyPrefix: "hero" });

    const title = t("title", {
        returnObjects: true,
    }) as { before: string; highlight: string };

    return (
        <Container>
            <div className="mt-5 space-y-5 col-span-3">
                <HeroBadge />
                <h1 className=" font-normal md:text-5xl xl:text-6xl text-4xl tracking-tight">
                    {title.before}{" "}
                    <span className="text-accent font-semibold">
                        {title.highlight}
                    </span>
                </h1>
                <p className="my-8 text-text-muted italic md:text-md text-sm">
                    {t("subtitle")}
                </p>
                <div className="md:grid  md:grid-cols-3 gap-4  flex flex-col items-stretch">
                    <Button label={t("ctaPrimary")} className="col-span-2" />
                    <Button
                        label={t("ctaSecondary")}
                        variant="outline"
                        className="col-span-2"
                    />
                </div>
                <small className="flex items-center space-x-2 md:text-sm text-xs mt-8">
                    <TriangleAlert className=" text-warning" size={24} />
                    <span className="text-text-secondary">{t("trust")}</span>
                </small>
            </div>
        </Container>
    );
}
