import { Head, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "react";
//#region resources/js/Components/layouts/Navbar.tsx
function Navbar() {
	return /* @__PURE__ */ jsx("ul", { children: "navbar" });
}
//#endregion
//#region resources/js/Components/layouts/AppLayout.tsx
function AppLayout({ children, title, description }) {
	const { url } = usePage();
	const canonicalUrl = `undefined${url}`;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(Head, { children: [
			/* @__PURE__ */ jsx("title", { children: `${title} – 3D Shop` }),
			description && /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: description
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "canonical",
				href: canonicalUrl
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:title",
				content: `${title} – 3D Shop`
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:url",
				content: canonicalUrl
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:type",
				content: "website"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:site_name",
				content: "3D Shop"
			})
		] }),
		/* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx(Navbar, {}) }),
		/* @__PURE__ */ jsx("main", {
			id: "main-content",
			tabIndex: -1,
			children
		}),
		/* @__PURE__ */ jsx("footer", { "aria-label": "Stopka strony" })
	] });
}
//#endregion
//#region resources/js/Pages/Landing.tsx
function Landing() {
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-base flex items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-6xl font-sans text-accent mb-4",
					children: "3D Shop"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-text-secondary font-mono text-lg mb-8",
					children: "// premium druk 3D"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-4 justify-center",
					children: [/* @__PURE__ */ jsx("button", {
						className: "bg-accent text-base px-6 py-3 font-sans font-semibold hover:bg-accent-hover transition-colors",
						children: "Zobacz produkty"
					}), /* @__PURE__ */ jsx("button", {
						className: "border border-accent text-accent px-6 py-3 font-sans hover:bg-accent hover:text-base transition-colors",
						children: "Zamów baton"
					})]
				})
			]
		})
	});
}
Landing.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "Landing",
	children: page
});
//#endregion
export { Landing as default };
