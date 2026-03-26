/**
 * Supported roles used to control navbar link visibility.
 */
export type UserRole = "client" | "admin";

/**
 * Single navigation item definition displayed in the navbar.
 */
export interface NavigationLink {
    /**
     * Human-readable label shown to users.
     */
    labelKey: string;
    /**
     * Target URL or route path.
     */
    href: string;
    /**
     * Optional list of roles allowed to see this link.
     */
    roles?: UserRole[];
    /**
     * Unique identifier for the navigation link.
     */

    id: string;
}
