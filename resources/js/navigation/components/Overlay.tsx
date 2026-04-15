import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type OverlayProps = {
    onClose: () => void;
};
export default function Overlay({ onClose }: OverlayProps) {
    return createPortal(
        <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 backdrop-blur-sm bg-black/10"
            onClick={onClose}
        />,
        document.getElementById("portal-root") ?? document.body,
    );
}
