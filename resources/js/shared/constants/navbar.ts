import { NavigationLink } from "@/types/navigation/navbar";

export const NAVIGATION_LINKS: NavigationLink[] = [
    { labelKey: "navbar.home", href: "/", id: "home-link" },
    { labelKey: "navbar.shop", href: "/shop", id: "shop-link" },
    { labelKey: "navbar.about", href: "/about", id: "about-link" },
    { labelKey: "navbar.faq", href: "/faq", id: "faq-link" },
    { labelKey: "navbar.contact", href: "/contact", id: "contact-link" },
];

export const AUTH_LINKS: NavigationLink[] = [
    { labelKey: "guestMenu.login", href: "/login", id: "login-link" },
    { labelKey: "guestMenu.register", href: "/register", id: "register-link" },
];

export const USER_LINKS: NavigationLink[] = [
    { labelKey: "userMenu.dashboard", href: "/profil", id: "dashboard-link" },
    { labelKey: "userMenu.orders", href: "/zamowienia", id: "orders-link" },
    { labelKey: "userMenu.cart", href: "/koszyk", id: "cart-link" },
    {
        labelKey: "userMenu.favorites",
        href: "/favorites",
        id: "favorites-link",
    },
];

export const ADMIN_LINKS: NavigationLink[] = [
    {
        labelKey: "adminMenu.adminDashboard",
        href: "/admin/dashboard",
        id: "admin-dashboard-link",
    },
    {
        labelKey: "adminMenu.manageStore",
        href: "/admin/produkty",
        id: "manage-store-link",
    },
];
