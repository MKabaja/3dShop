import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { colors } from "@/constants/colors";

export default function HeroBadge() {
    const { t } = useTranslation("landing", { keyPrefix: "hero" });
    const { accentMuted, accentDeep, accentLight } = colors;
    return (
        <div className=" inline-block bevel px-2 py-1   shadow-xl  glass-light">
            <motion.span
                className=" text-accent-light mx-1 font-bold text-md "
                animate={{
                    color: [accentMuted, accentDeep, accentLight, accentMuted],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                #
            </motion.span>
            <span className="text-gradient-badge uppercase   text-sm ">
                {t("badge")}
            </span>
        </div>
    );
}
