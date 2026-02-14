/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#f97415",
                "navy-dark": "#0f172a",
                background: {
                    light: "#f8f7f5",
                    dark: "#09090b", // Zinc 950
                },
                neutral: {
                    dark: "#18181b", // Zinc 900
                    muted: "#a1a1aa", // Zinc 400
                },
                border: {
                    light: "#cee8e4",
                }
            },
            fontFamily: {
                display: ["Lexend", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                full: "9999px",
            },
        },
    },
    plugins: [],
}
