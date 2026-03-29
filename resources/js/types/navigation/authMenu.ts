import type { ReactNode } from "react";
import type { NavigationLink } from "./navbar";

export type AuthVariant = "guest" | "user" | "admin";

export type VariantDetails = {
    portrait: ReactNode;
    links: NavigationLink[];
};
