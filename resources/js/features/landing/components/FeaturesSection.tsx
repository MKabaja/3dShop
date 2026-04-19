import SectionHeader from "@/features/landing/components/SectionHeader";
import { useTranslation } from "react-i18next";
import Container from "@/shared/ui/Container";
import Separator from "@/shared/ui/Separator";
import { FEATURE_ITEMS, type FeatureItem } from "../constants/features";

export default function FeaturesSection() {
    const { t } = useTranslation("landing");
    const id = "features-heading";

    return (
        <Container aria-labelledby={id}>
            <SectionHeader
                id={id}
                title={t("features.title")}
                subtitle={t("features.subtitle")}
                label={t("features.badge")}
            ></SectionHeader>
            <ul className="col-span-full md:grid md:grid-cols-3 gap-8 mt-10 justify-between">
                {FEATURE_ITEMS.map((feature: FeatureItem) => {
                    const Icon = feature.icon;
                    return (
                        <li
                            key={feature.id}
                            className=" border border-glow flex flex-col px-5 py-8 grid-rows-[auto_1fr]  text-center glass-strong card-noise  rounded-sm  shadow-neuro-inset "
                        >
                            <div className="relative flex flex-col  space-y-4 min-h-30">
                                <Icon className="mx-auto text-text-accent" />
                                <h3 className=" tracking-wider text-cards text-text-primary font-medium">
                                    {t(feature.labelKey)}
                                </h3>
                                <Separator
                                    size="sm"
                                    variant="decorative"
                                    className="bottom-0 "
                                />
                            </div>

                            <p className=" tracking-wide my-8 text-text-secondary italic font-thin md:text-md text-sm  text-center">
                                {t(feature.descriptionKey)}
                            </p>
                        </li>
                    );
                })}
            </ul>
            <Separator size="sm" variant="semantic" className="bottom-0" />
        </Container>
    );
}
