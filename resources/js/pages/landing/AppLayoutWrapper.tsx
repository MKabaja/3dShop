import { useTranslation } from "react-i18next";
import AppLayout from "@/layouts/AppLayout";
import type { ReactNode } from "react";

function AppLayoutWrapper({ children }: { children: ReactNode }) {
    const { t } = useTranslation();
    return (
        <AppLayout
            title={t("meta.home.title")}
            description={t("meta.home.description")}
        >
            {children}
        </AppLayout>
    );
}

export default AppLayoutWrapper;
